import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IVertragPersonEpp, VertragPersonEpp } from 'app/shared/model/vertrag-person-epp.model';
import { VertragPersonEppService } from './vertrag-person-epp.service';
import { VertragPersonEppComponent } from './vertrag-person-epp.component';
import { VertragPersonEppDetailComponent } from './vertrag-person-epp-detail.component';
import { VertragPersonEppUpdateComponent } from './vertrag-person-epp-update.component';

@Injectable({ providedIn: 'root' })
export class VertragPersonEppResolve implements Resolve<IVertragPersonEpp> {
  constructor(private service: VertragPersonEppService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IVertragPersonEpp> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((vertragPerson: HttpResponse<VertragPersonEpp>) => {
          if (vertragPerson.body) {
            return of(vertragPerson.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new VertragPersonEpp());
  }
}

export const vertragPersonRoute: Routes = [
  {
    path: '',
    component: VertragPersonEppComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertragPerson.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: VertragPersonEppDetailComponent,
    resolve: {
      vertragPerson: VertragPersonEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertragPerson.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: VertragPersonEppUpdateComponent,
    resolve: {
      vertragPerson: VertragPersonEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertragPerson.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: VertragPersonEppUpdateComponent,
    resolve: {
      vertragPerson: VertragPersonEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertragPerson.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
