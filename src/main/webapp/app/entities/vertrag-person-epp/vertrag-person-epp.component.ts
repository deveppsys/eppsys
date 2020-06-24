import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IVertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';
import { VertragPersonEppService } from './vertrag-person-epp.service';
import { VertragPersonEppDeleteDialogComponent } from './vertrag-person-epp-delete-dialog.component';

@Component({
  selector: 'jhi-vertrag-person-epp',
  templateUrl: './vertrag-person-epp.component.html',
})
export class VertragPersonEppComponent implements OnInit, OnDestroy {
  vertragPeople?: IVertragPersonEpp[];
  eventSubscriber?: Subscription;

  constructor(
    protected vertragPersonService: VertragPersonEppService,
    protected eventManager: JhiEventManager,
    protected modalService: NgbModal
  ) {}

  loadAll(): void {
    this.vertragPersonService.query().subscribe((res: HttpResponse<IVertragPersonEpp[]>) => (this.vertragPeople = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInVertragPeople();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IVertragPersonEpp): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInVertragPeople(): void {
    this.eventSubscriber = this.eventManager.subscribe('vertragPersonListModification', () => this.loadAll());
  }

  delete(vertragPerson: IVertragPersonEpp): void {
    const modalRef = this.modalService.open(VertragPersonEppDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.vertragPerson = vertragPerson;
  }
}
