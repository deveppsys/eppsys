import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPersonEpp } from 'app/shared/model/person-epp.model';

@Component({
  selector: 'jhi-person-epp-detail',
  templateUrl: './person-epp-detail.component.html',
})
export class PersonEppDetailComponent implements OnInit {
  person: IPersonEpp | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ person }) => (this.person = person));
  }

  previousState(): void {
    window.history.back();
  }
}
