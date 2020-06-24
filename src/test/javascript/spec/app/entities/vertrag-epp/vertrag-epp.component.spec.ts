import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { EppsysTestModule } from '../../../test.module';
import { VertragEppComponent } from 'app/entities/vertrag-epp/vertrag-epp.component';
import { VertragEppService } from 'app/entities/vertrag-epp/vertrag-epp.service';
import { VertragEpp } from 'app/shared/model/vertrag-epp.model';

describe('Component Tests', () => {
  describe('VertragEpp Management Component', () => {
    let comp: VertragEppComponent;
    let fixture: ComponentFixture<VertragEppComponent>;
    let service: VertragEppService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [VertragEppComponent],
      })
        .overrideTemplate(VertragEppComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(VertragEppComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(VertragEppService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new VertragEpp(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.vertrags && comp.vertrags[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
