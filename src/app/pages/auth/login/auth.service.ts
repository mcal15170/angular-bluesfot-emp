import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../../../model/auth.model'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(loginData: Auth): Observable<Auth> {
    return this.http.post<Auth>(environment.apiUrl + '/Login', { ...loginData, APIKey: 123 });
  }

}
