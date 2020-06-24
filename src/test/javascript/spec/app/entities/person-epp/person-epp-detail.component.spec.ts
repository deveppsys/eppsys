import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { EppsysTestModule } from '../../../test.module';
import { PersonEppDetailComponent } from 'app/entities/person-epp/person-epp-detail.component';
import { PersonEpp } from 'app/shared/model/person-epp.model';

describe('Component Tests', () => {
  describe('PersonEpp Management Detail Component', () => {
    let comp: PersonEppDetailComponent;
    let fixture: ComponentFixture<PersonEppDetailComponent>;
    const route = ({ data: of({ person: new PersonEpp(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [EppsysTestModule],
        declarations: [PersonEppDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(PersonEppDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(PersonEppDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load person on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.person).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
