import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared/util/request-util';
import { IVertragEpp } from 'app/shared/model/vertrag-epp.model';

type EntityResponseType = HttpResponse<IVertragEpp>;
type EntityArrayResponseType = HttpResponse<IVertragEpp[]>;

@Injectable({ providedIn: 'root' })
export class VertragEppService {
  public resourceUrl = SERVER_API_URL + 'api/vertrags';

  constructor(protected http: HttpClient) {}

  create(vertrag: IVertragEpp): Observable<EntityResponseType> {
    return this.http.post<IVertragEpp>(this.resourceUrl, vertrag, { observe: 'response' });
  }

  update(vertrag: IVertragEpp): Observable<EntityResponseType> {
    return this.http.put<IVertragEpp>(this.resourceUrl, vertrag, { observe: 'response' });
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http.get<IVertragEpp>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<IVertragEpp[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
