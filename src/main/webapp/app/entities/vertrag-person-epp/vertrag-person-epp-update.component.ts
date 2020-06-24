import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IVertragPersonEpp, VertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';
import { VertragPersonEppService } from './vertrag-person-epp.service';
import { IVertragEpp } from 'app/shared/model/vertrag-epp.model';
import { VertragEppService } from 'app/entities/vertrag-epp/vertrag-epp.service';
import { IPersonEpp } from 'app/shared/model/person-epp.model';
import { PersonEppService } from 'app/entities/person-epp/person-epp.service';

type SelectableEntity = IVertragEpp | IPersonEpp;

@Component({
  selector: 'jhi-vertrag-person-epp-update',
  templateUrl: './vertrag-person-epp-update.component.html',
})
export class VertragPersonEppUpdateComponent implements OnInit {
  isSaving = false;
  vertrags: IVertragEpp[] = [];
  people: IPersonEpp[] = [];

  editForm = this.fb.group({
    id: [],
    art: [],
    vertragId: [],
    personId: [],
  });

  constructor(
    protected vertragPersonService: VertragPersonEppService,
    protected vertragService: VertragEppService,
    protected personService: PersonEppService,
    protected activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ vertragPerson }) => {
      this.updateForm(vertragPerson);

      this.vertragService.query().subscribe((res: HttpResponse<IVertragEpp[]>) => (this.vertrags = res.body || []));

      this.personService.query().subscribe((res: HttpResponse<IPersonEpp[]>) => (this.people = res.body || []));
    });
  }

  updateForm(vertragPerson: IVertragPersonEpp): void {
    this.editForm.patchValue({
      id: vertragPerson.id,
      art: vertragPerson.art,
      vertragId: vertragPerson.vertragId,
      personId: vertragPerson.personId,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const vertragPerson = this.createFromForm();
    if (vertragPerson.id !== undefined) {
      this.subscribeToSaveResponse(this.vertragPersonService.update(vertragPerson));
    } else {
      this.subscribeToSaveResponse(this.vertragPersonService.create(vertragPerson));
    }
  }

  private createFromForm(): IVertragPersonEpp {
    return {
      ...new VertragPersonEpp(),
      id: this.editForm.get(['id'])!.value,
      art: this.editForm.get(['art'])!.value,
      vertragId: this.editForm.get(['vertragId'])!.value,
      personId: this.editForm.get(['personId'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IVertragPersonEpp>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError(): void {
    this.isSaving = false;
  }

  trackById(index: number, item: SelectableEntity): any {
    return item.id;
  }
}
