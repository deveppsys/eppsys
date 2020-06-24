import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IVertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';
import { VertragPersonEppService } from './vertrag-person-epp.service';

@Component({
  templateUrl: './vertrag-person-epp-delete-dialog.component.html',
})
export class VertragPersonEppDeleteDialogComponent {
  vertragPerson?: IVertragPersonEpp;

  constructor(
    protected vertragPersonService: VertragPersonEppService,
    public activeModal: NgbActiveModal,
    protected eventManager: JhiEventManager
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.vertragPersonService.delete(id).subscribe(() => {
      this.eventManager.broadcast('vertragPersonListModification');
      this.activeModal.close();
    });
  }
}
