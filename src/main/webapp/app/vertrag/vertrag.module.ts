import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertragDetailComponent } from './vertrag-detail/vertrag-detail.component';
import { VertragSucheComponent } from './vertrag-suche/vertrag-suche.component';
import { VertragPersonComponent } from './vertrag-person/vertrag-person.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ChartModule,
    AccordionModule,
    PanelMenuModule,
  ],
  declarations: [VertragDetailComponent, VertragSucheComponent, VertragPersonComponent],
})
export class VertragModule { }
