import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IVertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';

type EntityResponseType = HttpResponse<IVertragPersonEpp>;
type EntityArrayResponseType = HttpResponse<IVertragPersonEpp[]>;

@Injectable({ providedIn: 'root' })
export class VertragPersonEppService {
  public resourceUrl = SERVER_API_URL + 'api/vertrag-people';

  constructor(protected http: HttpClient) {}

  create(vertragPerson: IVertragPersonEpp): Observable<EntityResponseType> {
    return this.http.post<IVertragPersonEpp>(this.resourceUrl, vertragPerson, { observe: 'response' });
  }

  update(vertragPerson: IVertragPersonEpp): Observable<EntityResponseType> {
    return this.http.put<IVertragPersonEpp>(this.resourceUrl, vertragPerson, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IVertragPersonEpp>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IVertragPersonEpp[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
