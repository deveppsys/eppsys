import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

import { EppsysTestModule } from '../../../test.module';
import { PersonEppUpdateComponent } from 'app/entities/person-epp/person-epp-update.component';
import { PersonEppService } from 'app/entities/person-epp/person-epp.service';
import { PersonEpp } from 'app/shared/model/person-epp.model';

describe('Component Tests', () => {
  describe('PersonEpp Management Update Component', () => {
    let comp: PersonEppUpdateComponent;
    let fixture: ComponentFixture<PersonEppUpdateComponent>;
    let service: PersonEppService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [PersonEppUpdateComponent],
        providers: [FormBuilder],
      })
        .overrideTemplate(PersonEppUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PersonEppUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PersonEppService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new PersonEpp(123);
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
        const entity = new PersonEpp();
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
