import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {VertragService} from "app/vertrag/vertrag.service";

@Component({
  selector: 'epp-vertrag-basis',
  templateUrl: './vertrag-basis.component.html',
  styleUrls: ['./vertrag-basis.component.scss']
})
export class VertragBasisComponent implements OnInit {

  menuItems: MenuItem[] = [];

  constructor(private vertragService: VertragService) {
    vertragService.generateVertrag();
  }

  ngOnInit(): any {
    this.menuItems = [
      {
        label: 'Allgemein',
        items: [
          {
            label: 'Berechnung',
            routerLink: 'allgemein-berechnung'
          },
        ]
      },
      {
        label: 'Personen',
        items: [
          {
            label: 'Inhaber',
            routerLink: 'person-inhaber'
          },
          {
            label: 'Ehegatten',
            routerLink: 'person-ehegatten'
          },
          {
            label: 'Kinder',
            routerLink: 'person-kinder'
          },
          {
            label: 'Erben',
            routerLink: 'person-erben'
          }
        ]
      },
      {
        label: 'Geschäftsvorfälle',
        items: [
          {label: 'Übersicht'},
          {
            label: 'Zulageantrag',
            routerLink: 'gf-zulageantrag'
          },
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
          {
            label: 'Übersicht',
            routerLink: 'vermoegen-uebersicht'
          },
          {
            label: 'Wertentwicklung',
            routerLink: 'vermoegen-wertentwicklung'
          },
          {
            label: 'Bewegungen',
            routerLink: 'vermoegen-bewegungen'
          }
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
            label: 'Steuertöpfe',
            routerLink: 'steuer-toepfe'

          },
        ]
      },
      {
        label: 'Meldungen',
        items: [
          {
            label: 'zusy',
            routerLink: 'meldungen/zusy',
          },
          {
            label: 'rebsy',
            routerLink: 'meldungen/rebsy',
          },
          {
            label: 'mav',
            routerLink: 'meldungen/mav',
          }
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
