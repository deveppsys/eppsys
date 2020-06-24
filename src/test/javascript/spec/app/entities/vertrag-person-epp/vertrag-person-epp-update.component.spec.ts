import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { EppsysTestModule } from '../../../test.module';
import { VertragPersonEppUpdateComponent } from 'app/entities/vertrag-person-epp/vertrag-person-epp-update.component';
import { VertragPersonEppService } from 'app/entities/vertrag-person-epp/vertrag-person-epp.service';
import { VertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';

describe('Component Tests', () => {
  describe('VertragPersonEpp Management Update Component', () => {
    let comp: VertragPersonEppUpdateComponent;
    let fixture: ComponentFixture<VertragPersonEppUpdateComponent>;
    let service: VertragPersonEppService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [VertragPersonEppUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(VertragPersonEppUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(VertragPersonEppUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VertragPersonEppService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new VertragPersonEpp(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new VertragPersonEpp();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
