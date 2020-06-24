import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EppsysSharedModule } from 'app/shared/shared.module';
import { VertragPersonEppComponent } from './vertrag-person-epp.component';
import { VertragPersonEppDetailComponent } from './vertrag-person-epp-detail.component';
import { VertragPersonEppUpdateComponent } from './vertrag-person-epp-update.component';
import { VertragPersonEppDeleteDialogComponent } from './vertrag-person-epp-delete-dialog.component';
import { vertragPersonRoute } from './vertrag-person-epp.route';

@NgModule({
  imports: [EppsysSharedModule, RouterModule.forChild(vertragPersonRoute)],
  declarations: [
    VertragPersonEppComponent,
    VertragPersonEppDetailComponent,
    VertragPersonEppUpdateComponent,
    VertragPersonEppDeleteDialogComponent,
  ],
  entryComponents: [VertragPersonEppDeleteDialogComponent],
})
export class EppsysVertragPersonEppModule {}
