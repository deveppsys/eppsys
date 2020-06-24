import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { flatMap } from 'rxjs/operators';

import { Authority } from 'app/shared/constants/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { IPersonEpp, PersonEpp } from 'app/shared/model/person-epp.model';
import { PersonEppService } from './person-epp.service';
import { PersonEppComponent } from './person-epp.component';
import { PersonEppDetailComponent } from './person-epp-detail.component';
import { PersonEppUpdateComponent } from './person-epp-update.component';

@Injectable({ providedIn: 'root' })
export class PersonEppResolve implements Resolve<IPersonEpp> {
  constructor(private service: PersonEppService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IPersonEpp> | Observable<never> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(
        flatMap((person: HttpResponse<PersonEpp>) => {
          if (person.body) {
            return of(person.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return of(new PersonEpp());
  }
}

export const personRoute: Routes = [
  {
    path: '',
    component: PersonEppComponent,
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.person.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: PersonEppDetailComponent,
    resolve: {
      person: PersonEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.person.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: PersonEppUpdateComponent,
    resolve: {
      person: PersonEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.person.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: PersonEppUpdateComponent,
    resolve: {
      person: PersonEppResolve,
    },
    data: {
      authorities: [Authority.USER],
      pageTitle: 'eppsysApp.person.home.title',
    },
    canActivate: [UserRouteAccessService],
  },
];
