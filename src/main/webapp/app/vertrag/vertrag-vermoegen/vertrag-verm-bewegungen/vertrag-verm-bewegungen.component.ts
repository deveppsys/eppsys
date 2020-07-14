import { Component, OnInit } from '@angular/core';
import {BewegungDTO} from "app/entities/model";
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'epp-vertrag-verm-bewegungen',
  templateUrl: './vertrag-verm-bewegungen.component.html',
  styleUrls: ['./vertrag-verm-bewegungen.component.scss']
})
export class VertragVermBewegungenComponent implements OnInit {

  bewegungen: BewegungDTO[] = [];

  sortOptions: SelectItem[];

  sortKey = '';

  sortField = '';

  sortOrder = -1;

  constructor() {

    this.sortOptions = [
      {label: 'Datum Erstellung - absteigend', value: '!datumerstellung'},
      {label: 'Datum Erstellung - aufsteigend', value: 'datumerstellung'},
      {label: 'Datum Buchung - absteigend', value: '!datumbuchung'},
      {label: 'Datum Buchung - aufsteigend', value: 'datumbuchung'},
      {label: 'Art', value: 'art'},
      {label: 'Status', value: 'status'}
    ];

    this.bewegungen = [
      {
        datumerstellung: new Date( '2020-01-01'),
        datumbuchung: new Date( '2020-01-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-02-01'),
        datumbuchung: new Date( '2020-02-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-02-15'),
        datumbuchung: new Date( '2020-02-15'),
        art: 'Zulage Einzahlung',
        stat: 'gebucht',
        betrag: 154.00
      },
      {
        datumerstellung: new Date( '2020-03-01'),
        datumbuchung: new Date( '2020-03-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-04-01'),
        datumbuchung: new Date( '2020-04-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-05-01'),
        datumbuchung: new Date( '2020-05-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-06-01'),
        datumbuchung: new Date( '2020-06-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-07-01'),
        datumbuchung: new Date( '2020-07-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-08-01'),
        datumbuchung: new Date( '2020-08-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-09-01'),
        datumbuchung: new Date( '2020-09-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-10-01'),
        datumbuchung: new Date( '2020-10-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-11-01'),
        datumbuchung: new Date( '2020-11-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2020-12-01'),
        datumbuchung: new Date( '2020-12-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-01-01'),
        datumbuchung: new Date( '2021-01-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-02-01'),
        datumbuchung: new Date( '2021-02-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-02-15'),
        datumbuchung: new Date( '2021-02-15'),
        art: 'Zulage Einzahlung',
        stat: 'gebucht',
        betrag: 154.00
      },
      {
        datumerstellung: new Date( '2021-03-01'),
        datumbuchung: new Date( '2021-03-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-04-01'),
        datumbuchung: new Date( '2021-04-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-05-01'),
        datumbuchung: new Date( '2021-05-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-06-01'),
        datumbuchung: new Date( '2021-06-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-07-01'),
        datumbuchung: new Date( '2021-07-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-08-01'),
        datumbuchung: new Date( '2021-08-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-09-01'),
        datumbuchung: new Date( '2021-09-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-10-01'),
        datumbuchung: new Date( '2021-10-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-11-01'),
        datumbuchung: new Date( '2021-11-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      },
      {
        datumerstellung: new Date( '2021-12-01'),
        datumbuchung: new Date( '2021-12-01'),
        art: 'Beitrag Einzahlung',
        stat: 'gebucht',
        betrag: 100.00
      }
    ];
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
