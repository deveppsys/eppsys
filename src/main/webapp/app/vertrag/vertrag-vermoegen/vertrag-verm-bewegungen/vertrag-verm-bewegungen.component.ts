import {Component, OnInit, OnDestroy} from '@angular/core';
import {BewegungVM} from "app/entities/model";
import {SelectItem} from 'primeng/api';
import {VertragService} from "app/vertrag/vertrag.service";

@Component({
  selector: 'epp-vertrag-verm-bewegungen',
  templateUrl: './vertrag-verm-bewegungen.component.html',
  styleUrls: ['./vertrag-verm-bewegungen.component.scss']
})
export class VertragVermBewegungenComponent implements OnInit, OnDestroy {

  sortOptions: SelectItem[];

  bewegungen: BewegungVM[];

  sortKey = '';

  sortField = '';

  sortOrder = -1;

  constructor(public vertragService: VertragService) {
    this.bewegungen = [];

    this.sortOptions = [
      {label: 'Datum Erstellung - absteigend', value: '!datumerstellung'},
      {label: 'Datum Erstellung - aufsteigend', value: 'datumerstellung'},
      {label: 'Datum Buchung - absteigend', value: '!datumbuchung'},
      {label: 'Datum Buchung - aufsteigend', value: 'datumbuchung'},
      {label: 'Art', value: 'art'},
      {label: 'Status', value: 'status'}
    ];
  }

  ngOnInit(): void {
    if ( this.vertragService.vertragActive &&
         this.vertragService.vertragActive.bewegungen ) {
      this.bewegungen = this.vertragService.vertragActive.bewegungen;
    }
  }


  ngOnDestroy(): void {

  }

  onSortChange(event: any): void {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  calculateStyle(bewegung: BewegungVM): string {
    if ( bewegung &&
         bewegung.betrag &&
         bewegung.betrag >= 0.00 ) {
      return '"color: green"';
    }
    return '"color: red"';
  }

}
