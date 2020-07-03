import { Routes } from '@angular/router';

import {VertragDetailComponent} from "app/vertrag/vertrag-detail/vertrag-detail.component";
import {VertragSucheComponent} from "app/vertrag/vertrag-suche/vertrag-suche.component";

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
    path: 'vertrag/detail',
    component: VertragDetailComponent,
    data: {
      authorities: [],
      pageTitle: 'vertrag.detail',
    }
  },
];
