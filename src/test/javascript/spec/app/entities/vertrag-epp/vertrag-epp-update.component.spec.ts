import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { EppsysTestModule } from '../../../test.module';
import { VertragEppUpdateComponent } from 'app/entities/vertrag-epp/vertrag-epp-update.component';
import { VertragEppService } from 'app/entities/vertrag-epp/vertrag-epp.service';
import { VertragEpp } from 'app/shared/model/vertrag-epp.model';

describe('Component Tests', () => {
  describe('VertragEpp Management Update Component', () => {
    let comp: VertragEppUpdateComponent;
    let fixture: ComponentFixture<VertragEppUpdateComponent>;
    let service: VertragEppService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [VertragEppUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(VertragEppUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(VertragEppUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VertragEppService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new VertragEpp(123);
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
        const entity = new VertragEpp();
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
