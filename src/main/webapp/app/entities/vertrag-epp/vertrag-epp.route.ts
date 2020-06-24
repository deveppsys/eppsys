import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IVertragEpp, VertragEpp } from 'app/shared/model/vertrag-epp.model';
import { VertragEppService } from './vertrag-epp.service';
import { VertragEppComponent } from './vertrag-epp.component';
import { VertragEppDetailComponent } from './vertrag-epp-detail.component';
import { VertragEppUpdateComponent } from './vertrag-epp-update.component';

@Injectable({ providedIn: 'root' })
export class VertragEppResolve implements Resolve<IVertragEpp> {
  constructor(private service: VertragEppService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IVertragEpp> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((vertrag: HttpResponse<VertragEpp>) => {
          if (vertrag.body) {
            return of(vertrag.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new VertragEpp());
  }
}

export const vertragRoute: Routes = [
  {
    path: '',
    component: VertragEppComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertrag.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: VertragEppDetailComponent,
    resolve: {
      vertrag: VertragEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertrag.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: VertragEppUpdateComponent,
    resolve: {
      vertrag: VertragEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertrag.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: VertragEppUpdateComponent,
    resolve: {
      vertrag: VertragEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.vertrag.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
