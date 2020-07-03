import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'epp-vertrag-detail',
  templateUrl: './vertrag-detail.component.html',
  styleUrls: ['./vertrag-detail.component.scss']
})
export class VertragDetailComponent implements OnInit {

  dataWertentwicklung: any;

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

  ngOnInit(): void {
  }

}
