import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { VertragEppService } from 'app/entities/vertrag-epp/vertrag-epp.service';
import { IVertragEpp, VertragEpp } from 'app/shared/model/vertrag-epp.model';
import { VertragArtTyp } from 'app/shared/model/enumerations/vertrag-art-typ.model';
import { VertragStatusTyp } from 'app/shared/model/enumerations/vertrag-status-typ.model';

describe('Service Tests', () => {
  describe('VertragEpp Service', () => {
    let injector: TestBed;
    let service: VertragEppService;
    let httpMock: HttpTestingController;
    let elemDefault: IVertragEpp;
    let expectedResult: IVertragEpp | IVertragEpp[] | boolean | null;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      expectedResult = null;
      injector = getTestBed();
      service = injector.get(VertragEppService);
      httpMock = injector.get(HttpTestingController);

      elemDefault = new VertragEpp(0, VertragArtTyp.RIESTER, VertragStatusTyp.AKTIV);
    });

    describe('Service methods', () => {
      it('should find an element', () => {
        const returnedFromService = Object.assign({}, elemDefault);

        service.find(123).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(elemDefault);
      });

      it('should create a VertragEpp', () => {
        const returnedFromService = Object.assign(
          {
            id: 0,
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.create(new VertragEpp()).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'POST' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should update a VertragEpp', () => {
        const returnedFromService = Object.assign(
          {
            art: 'BBBBBB',
            status: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.update(expected).subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'PUT' });
        req.flush(returnedFromService);
        expect(expectedResult).toMatchObject(expected);
      });

      it('should return a list of VertragEpp', () => {
        const returnedFromService = Object.assign(
          {
            art: 'BBBBBB',
            status: 'BBBBBB',
          },
          elemDefault
        );

        const expected = Object.assign({}, returnedFromService);

        service.query().subscribe(resp => (expectedResult = resp.body));

        const req = httpMock.expectOne({ method: 'GET' });
        req.flush([returnedFromService]);
        httpMock.verify();
        expect(expectedResult).toContainEqual(expected);
      });

      it('should delete a VertragEpp', () => {
        service.delete(123).subscribe(resp => (expectedResult = resp.ok));

        const req = httpMock.expectOne({ method: 'DELETE' });
        req.flush({ status: 200 });
        expect(expectedResult);
      });
    });

    afterEach(() => {
      httpMock.verify();
    });
  });
});
