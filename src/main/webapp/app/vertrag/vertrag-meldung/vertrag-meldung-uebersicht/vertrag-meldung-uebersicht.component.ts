import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { MeldungArtTyp, MeldungStatusTyp, MeldungVM } from "app/entities/model";

@Component({
  selector: 'epp-vertrag-meldung-uebersicht',
  templateUrl: './vertrag-meldung-uebersicht.component.html',
  styleUrls: ['./vertrag-meldung-uebersicht.component.scss']
})
export class VertragMeldungUebersichtComponent implements OnInit {

  meldungen: MeldungVM[] = [];

  sortOptions: SelectItem[];

  sortKey = '';

  sortField = '';

  sortOrder = -1;

  constructor() {
    this.sortOptions = [
      {label: 'Art', value: 'art'},
      {label: 'Status', value: 'status'}
    ];

    this.meldungen = [
      {
        datumangelegt: new Date( '2020-01-01'),
        datumverarbeitet: new Date( '2020-01-01'),
        art: MeldungArtTyp.AZ01,
        stat: MeldungStatusTyp.AUSGANG_EXPORTIERT
      },
      {
        datumangelegt: new Date( '2020-01-05'),
        datumverarbeitet: new Date( '2020-01-01'),
        art: MeldungArtTyp.ZA02,
        stat: MeldungStatusTyp.EINGANG_IMPORTIERT
      },
      {
        datumangelegt: new Date( '2020-5-15'),
        art: MeldungArtTyp.ZA04,
        stat: MeldungStatusTyp.EINGANG_ANGELEGT
      }
    ]
  }

  ngOnInit(): void {
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
}
