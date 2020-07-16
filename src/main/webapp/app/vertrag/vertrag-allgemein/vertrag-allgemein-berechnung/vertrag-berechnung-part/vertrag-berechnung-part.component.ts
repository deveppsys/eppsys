import { Component, OnInit } from '@angular/core';
import {BerechnungJahrVM, BerechnungVM} from "app/entities/model";

@Component({
  selector: 'epp-vertrag-berechnung-part',
  templateUrl: './vertrag-berechnung-part.component.html',
  styleUrls: ['./vertrag-berechnung-part.component.scss']
})
export class VertragBerechnungPartComponent implements OnInit {

  berechnung: BerechnungVM;

  constructor() {
    const berechnungJahre: BerechnungJahrVM[] = [
      {
        jahr: 2016
      },
      {
        jahr: 2017
      },
      {
        jahr: 2018
      },
      {
        jahr: 2019
      },
      {
        jahr: 2020
      },
      {
        jahr: 2021
      }
    ]

    this.berechnung = new BerechnungVM( berechnungJahre );
  }

  ngOnInit(): void {
  }

}
