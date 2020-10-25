import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public verifyEmail(subject: string): boolean {
    let reg: RegExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
    return this.regExpVerify(subject, reg);
  }

  public regExpVerify(subject: string, pattern: RegExp): boolean {
    if(pattern.test(subject)) {
      return true;
    } else {
      return false;
    }
  }
}
