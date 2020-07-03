import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertragDetailComponent } from './vertrag-detail/vertrag-detail.component';
import { VertragSucheComponent } from './vertrag-suche/vertrag-suche.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';



@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    ChartModule
  ],
  declarations: [VertragDetailComponent, VertragSucheComponent],
})
export class VertragModule { }
