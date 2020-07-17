import { Routes } from '@angular/router';

import {VertragBasisComponent} from "app/vertrag/vertrag-basis/vertrag-basis.component";
import {VertragSucheComponent} from "app/vertrag/vertrag-suche/vertrag-suche.component";
import {VertragPersonComponent} from "app/vertrag/vertrag-person/vertrag-person.component";
import {VertragSteuerToepfeComponent} from "app/vertrag/vertrag-steuer/vertrag-steuer-toepfe/vertrag-steuer-toepfe.component";
import {VertragZaBasisComponent} from "app/vertrag/vertrag-zulageantrag/vertrag-za-basis/vertrag-za-basis.component";
import {VertragVermBewegungenComponent} from "app/vertrag/vertrag-vermoegen/vertrag-verm-bewegungen/vertrag-verm-bewegungen.component";
import {VertragVermUebersichtComponent} from "app/vertrag/vertrag-vermoegen/vertrag-verm-uebersicht/vertrag-verm-uebersicht.component";
import {VertragVermWertentwComponent} from "app/vertrag/vertrag-vermoegen/vertrag-verm-wertentw/vertrag-verm-wertentw.component";
import {VertragMeldungUebersichtComponent} from "app/vertrag/vertrag-meldung/vertrag-meldung-uebersicht/vertrag-meldung-uebersicht.component";
import {VertragFoerderungUebersichtComponent} from "app/vertrag/vertrag-foerderung/vertrag-foerderung-uebersicht/vertrag-foerderung-uebersicht.component";
import {VertragAllgemeinBerechnungComponent} from "app/vertrag/vertrag-allgemein/vertrag-allgemein-berechnung/vertrag-allgemein-berechnung.component";

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
        path: 'allgemein-berechnung',
        component: VertragAllgemeinBerechnungComponent,
      },
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
        path: 'gf-zulageantrag',
        component: VertragZaBasisComponent,
      },
      {
        path: 'vermoegen-uebersicht',
        component: VertragVermUebersichtComponent,
      },
      {
        path: 'vermoegen-wertentwicklung',
        component: VertragVermWertentwComponent,
      },
      {
        path: 'vermoegen-bewegungen',
        component: VertragVermBewegungenComponent,
      },
      {
        path: 'foerderung-uebersicht',
        component: VertragFoerderungUebersichtComponent,
      },
      {
        path: 'meldungen/:verfahren',
        component: VertragMeldungUebersichtComponent,
      },
      {
        path: 'steuer-toepfe',
        component: VertragSteuerToepfeComponent,
      }
    ]
  },
];
