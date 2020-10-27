import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  getUserName(): string {
    if(localStorage.getItem('username')) {
      return localStorage.getItem('username');
    } else {
      return '匿名使用者';
    }
  }
}
