import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IVertragEpp, VertragEpp } from 'app/shared/model/vertrag-epp.model';
import { VertragEppService } from './vertrag-epp.service';

@Component({
  selector: 'jhi-vertrag-epp-update',
  templateUrl: './vertrag-epp-update.component.html',
})
export class VertragEppUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    art: [],
    status: [],
  });

  constructor(protected vertragService: VertragEppService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ vertrag }) => {
      this.updateForm(vertrag);
    });
  }

  updateForm(vertrag: IVertragEpp): void {
    this.editForm.patchValue({
      id: vertrag.id,
      art: vertrag.art,
      status: vertrag.status,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const vertrag = this.createFromForm();
    if (vertrag.id !== undefined) {
      this.subscribeToSaveResponse(this.vertragService.update(vertrag));
    } else {
      this.subscribeToSaveResponse(this.vertragService.create(vertrag));
    }
  }

  private createFromForm(): IVertragEpp {
    return {
      ...new VertragEpp(),
      id: this.editForm.get(['id'])!.value,
      art: this.editForm.get(['art'])!.value,
      status: this.editForm.get(['status'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IVertragEpp>>): void {
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
}
