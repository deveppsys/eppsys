import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { EppsysTestModule } from '../../../test.module';
import { VertragEppDetailComponent } from 'app/entities/vertrag-epp/vertrag-epp-detail.component';
import { VertragEpp } from 'app/shared/model/vertrag-epp.model';

describe('Component Tests', () => {
  describe('VertragEpp Management Detail Component', () => {
    let comp: VertragEppDetailComponent;
    let fixture: ComponentFixture<VertragEppDetailComponent>;
    const route = ({ data: of({ vertrag: new VertragEpp(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [VertragEppDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(VertragEppDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(VertragEppDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load vertrag on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.vertrag).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
