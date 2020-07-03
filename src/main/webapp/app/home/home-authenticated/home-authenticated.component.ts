import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'epp-home-authenticated',
  templateUrl: './home-authenticated.component.html',
  styleUrls: ['./home-authenticated.component.scss']
})
export class HomeAuthenticatedComponent implements OnInit {

  @Input()
  firstName: string;

  @Input()
  lastName: string;

  constructor(private router: Router) {
    this.firstName = '';
    this.lastName = '';
  }

  ngOnInit(): void {
  }

  clickTestVertragDetail(): any {
    this.router.navigate(['vertrag/detail']);
  }

  clickTestVertragSuche(): any {
    this.router.navigate(['vertrag/suche']);
  }

}
