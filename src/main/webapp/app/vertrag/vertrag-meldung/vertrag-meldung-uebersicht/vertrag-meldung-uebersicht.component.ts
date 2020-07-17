import { Component, OnInit, ViewChild } from '@angular/core';
import { MeldungStatusTyp, MeldungVM } from "app/entities/model";
import {VertragService} from "app/vertrag/vertrag.service";
import { Table } from 'primeng/table';

@Component({
  selector: 'epp-vertrag-meldung-uebersicht',
  templateUrl: './vertrag-meldung-uebersicht.component.html',
  styleUrls: ['./vertrag-meldung-uebersicht.component.scss']
})
export class VertragMeldungUebersichtComponent implements OnInit {

  meldungen: MeldungVM[] = [];

  meldungSelected: MeldungVM | undefined;

  loading = true;

  statuses: any[];

  @ViewChild('dt') table: Table | undefined;

  showAnzeigen = false;
  showAendern = false;
  showLoeschen = false;

  constructor(private vertragService: VertragService) {

    this.statuses = [
      {label: 'Import angelegt', value: 'Import angelegt'},
      {label: 'Import ohne Fehler', value: 'Import ohne Fehler'},
      {label: 'Import mit Fehlern', value: 'Import mit Fehlern'},
      {label: 'Import fehlerhaft', value: 'mport fehlerhaft'},
      {label: 'Export angelegt', value: 'Export angelegt'},
      {label: 'Export ohne Fehler', value: 'Export ohne Fehler'},
      {label: 'Export fehlerhaft', value: 'Export fehlerhaft'}
    ]
  }

  ngOnInit(): void {
    if ( this.vertragService.vertragActive &&
      this.vertragService.vertragActive.meldungen ) {
      this.meldungen = this.vertragService.vertragActive.meldungen;
      this.loading = false;
    }
  }

  onSucheSelect(target: any): void {
    if ( this.table ) {
      this.table.filterGlobal(target.value, 'contains');
    }
  }

  onArtSelect(target: any): void {
    if ( this.table ) {
      this.table.filter(target.value, 'art', 'startsWith');
    }
  }

  onJahrSelect(target: any): void {
    if ( this.table ) {
      this.table.filter(target.value, 'jahrZuordnung', 'contains');
    }
  }

  onDateSelect(value: number): void {
    if( this.table ) {
      if ( value === 0 )  {
        this.table.filter('', 'date', 'equals')
      } else {
        this.table.filter(this.formatDate(new Date(value)), 'date', 'equals')
      }
    }
  }

  onStatusSelect(value: any): void {
    if( this.table ) {
      this.table.filter(value, 'stat', 'equals')
    }
  }


  formatDate(date: Date): string {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
      month = Number('0' + month);
    }

    if (day < 10) {
      day = Number('0' + day);
    }

    return date.getFullYear() + '-' + month + '-' + day;
  }

  getMeldungStatus(meldung: MeldungVM): string {
    if ( meldung &&
         meldung.stat ) {
      return meldung.stat.toString();
    }
    return '';
  }

  isEingehendAngelegt(meldung: MeldungVM): boolean {
    if ( meldung.stat === MeldungStatusTyp.EINGANG_ANGELEGT ) {
      return true;
    }
    return false;
  }

  isEingehendImportiertOhneFehler(meldung: MeldungVM): boolean {
    if ( meldung.stat === MeldungStatusTyp.EINGANG_IMPORTIERT_OHNE_FEHLER ) {
      return true;
    }
    return false;
  }

  isEingehendImportiertMitFehler(meldung: MeldungVM): boolean {
    if ( meldung.stat === MeldungStatusTyp.EINGANG_IMPORTIERT_MIT_FEHLER ) {
      return true;
    }
    return false;
  }

  isEingehendImportiertNichtImportierbar(meldung: MeldungVM): boolean {
    if ( meldung.stat === MeldungStatusTyp.EINGANG_NICHT_IMPORTIERBAR ) {
      return true;
    }
    return false;
  }

  isAusgehendAngelegt(meldung: MeldungVM): boolean {
    if ( meldung.stat === MeldungStatusTyp.AUSGANG_ANGELEGT ) {
      return true;
    }
    return false;
  }

  isAusgehendExportiertOhneFehler(meldung: MeldungVM): boolean {
    if ( meldung.stat === MeldungStatusTyp.AUSGANG_EXPORTIERT_OHNE_FEHLER ) {
      return true;
    }
    return false;
  }

  isAusgehendExportiertNichtExportierbar(meldung: MeldungVM): boolean {
    if ( meldung.stat === MeldungStatusTyp.AUSGANG_EXPORTIERT_NICHT_EXPORTIERBAR ) {
      return true;
    }
    return false;
  }

  onClickAnzeigen(meldung: MeldungVM): void {
    this.meldungSelected = meldung;
    this.showAnzeigen = true;
  }

  onClickAendern(meldung: MeldungVM): void {
    this.meldungSelected = meldung;
    this.showAendern = true;
  }

  onClickLoeschen(meldung: MeldungVM): void {
    this.meldungSelected = meldung;
    this.showLoeschen = true;
  }
}
