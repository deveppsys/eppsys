import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EppsysSharedModule } from 'app/shared/shared.module';
import { VertragEppComponent } from './vertrag-epp.component';
import { VertragEppDetailComponent } from './vertrag-epp-detail.component';
import { VertragEppUpdateComponent } from './vertrag-epp-update.component';
import { VertragEppDeleteDialogComponent } from './vertrag-epp-delete-dialog.component';
import { vertragRoute } from './vertrag-epp.route';

@NgModule({
  imports: [EppsysSharedModule, RouterModule.forChild(vertragRoute)],
  declarations: [VertragEppComponent, VertragEppDetailComponent, VertragEppUpdateComponent, VertragEppDeleteDialogComponent],
  entryComponents: [VertragEppDeleteDialogComponent],
})
export class EppsysVertragEppModule {}
