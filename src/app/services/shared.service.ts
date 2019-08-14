import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() VisiFire: EventEmitter<any> = new EventEmitter();
  @Output() OpenSignFire: EventEmitter<any> = new EventEmitter();
  @Output() CloseSignFire: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  // Changing visibilty of contact in HOMEComponent
  changeDivContactVisiFalse() {
    this.VisiFire.emit(false);
  }

  changeDivContactVisiTrue() {
    this.VisiFire.emit(true);
  }

  getEmittedVisiValue() {
    return this.VisiFire;
  }
  //

  // Slide SignIn - SignUp

  openDivtoSign() {
    this.OpenSignFire.emit(true);
  }

  closeDivToSign() {
    this.CloseSignFire.emit(false);
  }

  getEmittedOpenSignValue() {
    return this.OpenSignFire;
  }

  getEmittedCloseSignValue() {
    return this.CloseSignFire;
  }

  //

}
