import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IVertragEpp } from 'app/shared/model/vertrag-epp.model';

@Component({
  selector: 'jhi-vertrag-epp-detail',
  templateUrl: './vertrag-epp-detail.component.html',
})
export class VertragEppDetailComponent implements OnInit {
  vertrag: IVertragEpp | null = null;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ vertrag }) => (this.vertrag = vertrag));
  }

  previousState(): void {
    window.history.back();
  }
}
