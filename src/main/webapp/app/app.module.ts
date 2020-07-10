import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import './vendor';
import { EppsysSharedModule } from 'app/shared/shared.module';
import { EppsysCoreModule } from 'app/core/core.module';
import { EppsysAppRoutingModule } from './app-routing.module';
import { EppsysHomeModule } from './home/home.module';
import { EppsysEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';
import { ButtonModule } from 'primeng/button';
import { VertragModule } from "app/vertrag/vertrag.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EppsysSharedModule,
    EppsysCoreModule,
    EppsysHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EppsysEntityModule,
    EppsysAppRoutingModule,
    ButtonModule,
    VertragModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class EppsysAppModule {}
