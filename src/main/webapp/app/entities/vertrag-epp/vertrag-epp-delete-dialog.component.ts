import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IVertragEpp } from 'app/shared/model/vertrag-epp.model';
import { VertragEppService } from './vertrag-epp.service';

@Component({
  templateUrl: './vertrag-epp-delete-dialog.component.html',
})
export class VertragEppDeleteDialogComponent {
  vertrag?: IVertragEpp;

  constructor(protected vertragService: VertragEppService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.vertragService.delete(id).subscribe(() => {
      this.eventManager.broadcast('vertragListModification');
      this.activeModal.close();
    });
  }
}
