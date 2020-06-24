import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IPersonEpp } from 'app/shared/model/person-epp.model';
import { PersonEppService } from './person-epp.service';

@Component({
  templateUrl: './person-epp-delete-dialog.component.html',
})
export class PersonEppDeleteDialogComponent {
  person?: IPersonEpp;

  constructor(protected personService: PersonEppService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.personService.delete(id).subscribe(() => {
      this.eventManager.broadcast('personListModification');
      this.activeModal.close();
    });
  }
}
