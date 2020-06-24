import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { IPersonEpp, PersonEpp } from 'app/shared/model/person-epp.model';
import { PersonEppService } from './person-epp.service';

@Component({
  selector: 'jhi-person-epp-update',
  templateUrl: './person-epp-update.component.html',
})
export class PersonEppUpdateComponent implements OnInit {
  isSaving = false;

  editForm = this.fb.group({
    id: [],
    nachname: [],
    vorname: [],
    geburtsname: [],
    geburtsort: [],
  });

  constructor(protected personService: PersonEppService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ person }) => {
      this.updateForm(person);
    });
  }

  updateForm(person: IPersonEpp): void {
    this.editForm.patchValue({
      id: person.id,
      nachname: person.nachname,
      vorname: person.vorname,
      geburtsname: person.geburtsname,
      geburtsort: person.geburtsort,
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    const person = this.createFromForm();
    if (person.id !== undefined) {
      this.subscribeToSaveResponse(this.personService.update(person));
    } else {
      this.subscribeToSaveResponse(this.personService.create(person));
    }
  }

  private createFromForm(): IPersonEpp {
    return {
      ...new PersonEpp(),
      id: this.editForm.get(['id'])!.value,
      nachname: this.editForm.get(['nachname'])!.value,
      vorname: this.editForm.get(['vorname'])!.value,
      geburtsname: this.editForm.get(['geburtsname'])!.value,
      geburtsort: this.editForm.get(['geburtsort'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IPersonEpp>>): void {
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
