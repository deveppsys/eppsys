import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VertragBasisComponent } from './vertrag-basis/vertrag-basis.component';
import { VertragSucheComponent } from './vertrag-suche/vertrag-suche.component';
import { VertragPersonComponent } from './vertrag-person/vertrag-person.component';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FieldsetModule } from 'primeng/fieldset';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { VertragSteuerToepfeComponent } from './vertrag-steuer/vertrag-steuer-toepfe/vertrag-steuer-toepfe.component';
import { VertragZaBasisComponent } from './vertrag-zulageantrag/vertrag-za-basis/vertrag-za-basis.component';
import { VertragZaPersonComponent } from './vertrag-zulageantrag/vertrag-za-person/vertrag-za-person.component';
import { VertragZaKindComponent } from './vertrag-zulageantrag/vertrag-za-kind/vertrag-za-kind.component';
import { VertragVermBewegungenComponent } from './vertrag-vermoegen/vertrag-verm-bewegungen/vertrag-verm-bewegungen.component';
import { VertragVermUebersichtComponent } from './vertrag-vermoegen/vertrag-verm-uebersicht/vertrag-verm-uebersicht.component';
import { VertragVermWertentwComponent } from './vertrag-vermoegen/vertrag-verm-wertentw/vertrag-verm-wertentw.component';
import { VertragMeldungUebersichtComponent } from './vertrag-meldung/vertrag-meldung-uebersicht/vertrag-meldung-uebersicht.component';
import { VertragMeldungDetailComponent } from './vertrag-meldung/vertrag-meldung-detail/vertrag-meldung-detail.component';
import { VertragFoerderungUebersichtComponent } from './vertrag-foerderung/vertrag-foerderung-uebersicht/vertrag-foerderung-uebersicht.component';
import { VertragAllgemeinBerechnungComponent } from './vertrag-allgemein/vertrag-allgemein-berechnung/vertrag-allgemein-berechnung.component';
import { VertragBerechnungYearComponent } from './vertrag-allgemein/vertrag-allgemein-berechnung/vertrag-berechnung-year/vertrag-berechnung-year.component';
import { VertragBerechnungPartComponent } from './vertrag-allgemein/vertrag-allgemein-berechnung/vertrag-berechnung-part/vertrag-berechnung-part.component';
import {VertragService} from "app/vertrag/vertrag.service";
import {VertragTestService} from "app/vertrag/vertrag-test.service";

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    CardModule,
    ChartModule,
    AccordionModule,
    PanelMenuModule,
    FieldsetModule,
    DataViewModule,
    DropdownModule,
    TableModule,
    TabViewModule,
    CalendarModule,
    InputTextModule,
    DialogModule
  ],
  declarations: [VertragBasisComponent, VertragSucheComponent, VertragPersonComponent, VertragSteuerToepfeComponent, VertragZaBasisComponent, VertragZaPersonComponent, VertragZaKindComponent, VertragVermBewegungenComponent, VertragVermUebersichtComponent, VertragVermWertentwComponent, VertragMeldungUebersichtComponent, VertragMeldungDetailComponent, VertragFoerderungUebersichtComponent, VertragAllgemeinBerechnungComponent, VertragBerechnungYearComponent, VertragBerechnungPartComponent],
  providers: [VertragService, VertragTestService]
})
export class VertragModule { }
