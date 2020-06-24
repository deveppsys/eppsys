import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { EppsysTestModule } from '../../../test.module';
import { VertragPersonEppDetailComponent } from 'app/entities/vertrag-person-epp/vertrag-person-epp-detail.component';
import { VertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';

describe('Component Tests', () => {
  describe('VertragPersonEpp Management Detail Component', () => {
    let comp: VertragPersonEppDetailComponent;
    let fixture: ComponentFixture<VertragPersonEppDetailComponent>;
    const route = ({ data: of({ vertragPerson: new VertragPersonEpp(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [VertragPersonEppDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(VertragPersonEppDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(VertragPersonEppDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load vertragPerson on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.vertragPerson).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
