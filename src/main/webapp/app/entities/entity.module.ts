import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'person-epp',
        loadChildren: () => import('./person-epp/person-epp.module').then(m => m.EppsysPersonEppModule),
      },
      {
        path: 'vertrag-person-epp',
        loadChildren: () => import('./vertrag-person-epp/vertrag-person-epp.module').then(m => m.EppsysVertragPersonEppModule),
      },
      {
        path: 'vertrag-epp',
        loadChildren: () => import('./vertrag-epp/vertrag-epp.module').then(m => m.EppsysVertragEppModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EppsysEntityModule {}
