import { Injectable, Output, EventEmitter } from '@angular/core';
import {VertragTestService} from "app/vertrag/vertrag-test.service";
import {VertragVM} from "app/entities/model";

@Injectable({
  providedIn: 'root'
})
export class VertragService {

  @Output()
  vertragUpdate: EventEmitter<VertragVM> = new EventEmitter();

  vertragActive: VertragVM;

  constructor(private vertragTestService: VertragTestService) {
    this.vertragActive = new VertragVM();
  }

  generateVertrag(): void {
    this.vertragActive = this.vertragTestService.generateVertrag();
    this.vertragUpdate.emit( this.vertragActive );
  }

  updateVertrag(vertragVM: VertragVM): void {
    this.vertragActive = vertragVM;
    this.vertragUpdate.emit( this.vertragActive );
  }
}
