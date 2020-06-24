import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { EppsysTestModule } from '../../../test.module';
import { MockEventManager } from '../../../helpers/mock-event-manager.service';
import { MockActiveModal } from '../../../helpers/mock-active-modal.service';
import { VertragPersonEppDeleteDialogComponent } from 'app/entities/vertrag-person-epp/vertrag-person-epp-delete-dialog.component';
import { VertragPersonEppService } from 'app/entities/vertrag-person-epp/vertrag-person-epp.service';

describe('Component Tests', () => {
  describe('VertragPersonEpp Management Delete Component', () => {
    let comp: VertragPersonEppDeleteDialogComponent;
    let fixture: ComponentFixture<VertragPersonEppDeleteDialogComponent>;
    let service: VertragPersonEppService;
    let mockEventManager: MockEventManager;
    let mockActiveModal: MockActiveModal;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [VertragPersonEppDeleteDialogComponent],
      })
        .overrideTemplate(VertragPersonEppDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(VertragPersonEppDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VertragPersonEppService);
      mockEventManager = TestBed.get(JhiEventManager);
      mockActiveModal = TestBed.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.closeSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));

      it('Should not call delete service on clear', () => {
        // GIVEN
        spyOn(service, 'delete');

        // WHEN
        comp.cancel();

        // THEN
        expect(service.delete).not.toHaveBeenCalled();
        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
      });
    });
  });
});
