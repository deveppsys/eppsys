import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IVertragEpp } from 'app/shared/model/vertrag-epp.model';
import { VertragEppService } from './vertrag-epp.service';
import { VertragEppDeleteDialogComponent } from './vertrag-epp-delete-dialog.component';

@Component({
  selector: 'jhi-vertrag-epp',
  templateUrl: './vertrag-epp.component.html',
})
export class VertragEppComponent implements OnInit, OnDestroy {
  vertrags?: IVertragEpp[];
  eventSubscriber?: Subscription;

  constructor(protected vertragService: VertragEppService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.vertragService.query().subscribe((res: HttpResponse<IVertragEpp[]>) => (this.vertrags = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInVertrags();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IVertragEpp): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInVertrags(): void {
    this.eventSubscriber = this.eventManager.subscribe('vertragListModification', () => this.loadAll());
  }

  delete(vertrag: IVertragEpp): void {
    const modalRef = this.modalService.open(VertragEppDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.vertrag = vertrag;
  }
}
