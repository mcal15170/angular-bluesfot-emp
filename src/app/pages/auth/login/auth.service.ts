import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from '../../../model/auth.model'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  login(loginData: Auth): Observable<Auth> {
    return this.http.post<Auth>('http://192.168.0.103:9192/Login', { ...loginData, APIKey: 123 });
  }

}
