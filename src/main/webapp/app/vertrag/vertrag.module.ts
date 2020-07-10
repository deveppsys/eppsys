import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertragBasisComponent } from './vertrag-basis/vertrag-basis.component';
import { VertragSucheComponent } from './vertrag-suche/vertrag-suche.component';
import { VertragPersonComponent } from './vertrag-person/vertrag-person.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { VertragSteuerToepfeComponent } from './vertrag-steuer/vertrag-steuer-toepfe/vertrag-steuer-toepfe.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ChartModule,
    AccordionModule,
    PanelMenuModule,
  ],
  declarations: [VertragBasisComponent, VertragSucheComponent, VertragPersonComponent, VertragSteuerToepfeComponent],
})
export class VertragModule { }
