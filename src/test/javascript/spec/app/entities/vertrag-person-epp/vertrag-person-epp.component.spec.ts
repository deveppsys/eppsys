import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { EppsysTestModule } from '../../../test.module';
import { VertragPersonEppComponent } from 'app/entities/vertrag-person-epp/vertrag-person-epp.component';
import { VertragPersonEppService } from 'app/entities/vertrag-person-epp/vertrag-person-epp.service';
import { VertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';

describe('Component Tests', () => {
  describe('VertragPersonEpp Management Component', () => {
    let comp: VertragPersonEppComponent;
    let fixture: ComponentFixture<VertragPersonEppComponent>;
    let service: VertragPersonEppService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [VertragPersonEppComponent],
      })
        .overrideTemplate(VertragPersonEppComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(VertragPersonEppComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VertragPersonEppService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new VertragPersonEpp(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.vertragPeople && comp.vertragPeople[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
