import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor() { }

  logout() {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
    }
    if (localStorage.getItem('DesignationList')) {
      localStorage.removeItem('DesignationList');
    }

  }

}
