import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { EppsysTestModule } from '../../../test.module';
import { PersonEppComponent } from 'app/entities/person-epp/person-epp.component';
import { PersonEppService } from 'app/entities/person-epp/person-epp.service';
import { PersonEpp } from 'app/shared/model/person-epp.model';

describe('Component Tests', () => {
  describe('PersonEpp Management Component', () => {
    let comp: PersonEppComponent;
    let fixture: ComponentFixture<PersonEppComponent>;
    let service: PersonEppService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [PersonEppComponent],
      })
        .overrideTemplate(PersonEppComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(PersonEppComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(PersonEppService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new PersonEpp(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.people && comp.people[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
