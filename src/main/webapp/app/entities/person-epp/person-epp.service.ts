import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IPersonEpp } from 'app/shared/model/person-epp.model';

type EntityResponseType = HttpResponse<IPersonEpp>;
type EntityArrayResponseType = HttpResponse<IPersonEpp[]>;

@Injectable({ providedIn: 'root' })
export class PersonEppService {
  public resourceUrl = SERVER_API_URL + 'api/people';

  constructor(protected http: HttpClient) {}

  create(person: IPersonEpp): Observable<EntityResponseType> {
    return this.http.post<IPersonEpp>(this.resourceUrl, person, { observe: 'response' });
  }

  update(person: IPersonEpp): Observable<EntityResponseType> {
    return this.http.put<IPersonEpp>(this.resourceUrl, person, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IPersonEpp>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IPersonEpp[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
