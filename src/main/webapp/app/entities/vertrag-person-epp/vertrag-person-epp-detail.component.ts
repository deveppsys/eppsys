import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IVertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';

@Component({
  selector: 'jhi-vertrag-person-epp-detail',
  templateUrl: './vertrag-person-epp-detail.component.html',
})
export class VertragPersonEppDetailComponent implements OnInit {
  vertragPerson: IVertragPersonEpp | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ vertragPerson }) => (this.vertragPerson = vertragPerson));
  }

  previousState(): void {
    window.history.back();
  }
}
