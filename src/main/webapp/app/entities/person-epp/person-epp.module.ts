import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EppsysSharedModule } from 'app/shared/shared.module';
import { PersonEppComponent } from './person-epp.component';
import { PersonEppDetailComponent } from './person-epp-detail.component';
import { PersonEppUpdateComponent } from './person-epp-update.component';
import { PersonEppDeleteDialogComponent } from './person-epp-delete-dialog.component';
import { personRoute } from './person-epp.route';

@NgModule({
  imports: [EppsysSharedModule, RouterModule.forChild(personRoute)],
  declarations: [PersonEppComponent, PersonEppDetailComponent, PersonEppUpdateComponent, PersonEppDeleteDialogComponent],
  entryComponents: [PersonEppDeleteDialogComponent],
})
export class EppsysPersonEppModule {}
