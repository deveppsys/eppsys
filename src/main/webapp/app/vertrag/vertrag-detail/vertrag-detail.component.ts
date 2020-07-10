import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'epp-vertrag-detail',
  templateUrl: './vertrag-detail.component.html',
  styleUrls: ['./vertrag-detail.component.scss']
})
export class VertragDetailComponent implements OnInit {

  dataWertentwicklung: any;

  menuItems: MenuItem[] = [];

  constructor() {
    this.dataWertentwicklung = {
      labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'],
      datasets: [
        {
          label: 'Einzahlungen',
          data: [1200.00, 2400.00, 3600.00, 4800.00, 6000.00, 7200.00, 8400.00, 9600.00, 10800.00],
          borderColor: '#4bc0c0'
        },
        {
          label: 'Kurswert',
          data: [700.00, 1950.00, 3600.00, 5000.00, 6400.00, 7800.00, 10000.00, 12000.00,14000.00, 15700.00],
          borderColor: '#565656'
        }
      ]
    }
  }

  ngOnInit(): any {
    this.menuItems = [
      {
        label: 'Allgemein',
        items: [
          { label: 'New' },
        ]
      },
      {
        label: 'Personen',
        items: [
          {
            label: 'Inhaber',
            // routerLink: ['person', { outlets: { vertrag: ['person'] } }]
            routerLink: 'person'
          },
          {label: 'Ehegatte'},
          {label: 'Kinder'},
          {label: 'Erben'}
        ]
      },
      {
        label: 'Geschäftsvorfälle',
        items: [
          {label: 'Übersicht'},
          {label: 'Kap.Üb. eingehend'},
          {label: 'Kap.Üb. ausgehend'},
          {label: 'Vers.ausgl. eingehend'},
          {label: 'Vers.ausgl. ausgehend'},
          {label: 'Schädliche Verwendung'},
          {label: 'Eigenheimentnahme'},
        ]
      },
      {
        label: 'Vermögen',
        // icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Übersicht'},
          {label: 'Wertentwicklung'},
          {label: 'Bewegungen'}
        ]
      },
      {
        label: 'Förderung',
        items: [
          { label: 'Übersicht' },
          { label: 'Gefördert' },
          { label: 'Ungefördert' }
        ]
      },
      {
        label: 'Steuer',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {label: 'Save', icon: 'pi pi-fw pi-save'},
              {label: 'Update', icon: 'pi pi-fw pi-save'},
            ]
          },
          {
            label: 'Other',
            icon: 'pi pi-fw pi-tags',
            items: [
              {label: 'Delete', icon: 'pi pi-fw pi-minus'}
            ]
          }
        ]
      },
      {
        label: 'Meldungen',
        items: [
          { label: 'zusy' },
          { label: 'rebsy' },
          { label: 'mav' }
        ]
      },
      {
        label: 'Bescheinigungen',
        items: [
          { label: '§ 7a AltZertG'},
          { label: '§ 22a EStG'},
          { label: '§ 92 EStG' }
        ]
      }
    ];
  }
}
