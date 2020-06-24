import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { IPersonEpp } from 'app/shared/model/person-epp.model';
import { PersonEppService } from './person-epp.service';
import { PersonEppDeleteDialogComponent } from './person-epp-delete-dialog.component';

@Component({
  selector: 'jhi-person-epp',
  templateUrl: './person-epp.component.html',
})
export class PersonEppComponent implements OnInit, OnDestroy {
  people?: IPersonEpp[];
  eventSubscriber?: Subscription;

  constructor(protected personService: PersonEppService, protected eventManager: JhiEventManager, protected modalService: NgbModal) {}

  loadAll(): void {
    this.personService.query().subscribe((res: HttpResponse<IPersonEpp[]>) => (this.people = res.body || []));
  }

  ngOnInit(): void {
    this.loadAll();
    this.registerChangeInPeople();
  }

  ngOnDestroy(): void {
    if (this.eventSubscriber) {
      this.eventManager.destroy(this.eventSubscriber);
    }
  }

  trackId(index: number, item: IPersonEpp): number {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return item.id!;
  }

  registerChangeInPeople(): void {
    this.eventSubscriber = this.eventManager.subscribe('personListModification', () => this.loadAll());
  }

  delete(person: IPersonEpp): void {
    const modalRef = this.modalService.open(PersonEppDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.person = person;
  }
}
