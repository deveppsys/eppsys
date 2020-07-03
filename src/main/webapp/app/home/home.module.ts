import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EppsysSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { HomeAuthenticatedComponent } from './home-authenticated/home-authenticated.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [ButtonModule, CardModule, EppsysSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent, HomeAuthenticatedComponent],
})
export class EppsysHomeModule {}
