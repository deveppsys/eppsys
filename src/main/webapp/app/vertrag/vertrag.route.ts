import { Routes } from '@angular/router';

import {VertragBasisComponent} from "app/vertrag/vertrag-basis/vertrag-basis.component";
import {VertragSucheComponent} from "app/vertrag/vertrag-suche/vertrag-suche.component";
import {VertragPersonComponent} from "app/vertrag/vertrag-person/vertrag-person.component";
import {VertragSteuerToepfeComponent} from "app/vertrag/vertrag-steuer/vertrag-steuer-toepfe/vertrag-steuer-toepfe.component";

export const VERTRAG_ROUTES: Routes = [
  {
    path: 'vertrag/suche',
    component: VertragSucheComponent,
    data: {
      authorities: [],
      pageTitle: 'vertrag.suche',
    }
  },
  {
    path: 'vertrag/basis',
    component: VertragBasisComponent,
    data: {
      authorities: [],
      pageTitle: 'vertrag.detail',
    },
    children: [
      {
        path: 'person-inhaber',
        component: VertragPersonComponent,
      },
      {
        path: 'person-ehegatten',
        component: VertragPersonComponent,
      },
      {
        path: 'person-kinder',
        component: VertragPersonComponent,
      },
      {
        path: 'person-erben',
        component: VertragPersonComponent,
      },
      {
        path: 'steuer-toepfe',
        component: VertragSteuerToepfeComponent,
      }
    ]
  },
];
