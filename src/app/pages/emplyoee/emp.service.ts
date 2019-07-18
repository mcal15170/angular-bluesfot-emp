import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  apiObj = {
    "APIKey": 123,
    "UserID": 1
  }

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.post(environment.apiUrl + '/GetEmployee', this.apiObj);
  }

  getFilterEmployee(obj:any){
    return this.http.post(environment.apiUrl + '/GetEmployee',obj);
    
  }

  addemployeedetail(obj: any) {
    return this.http.post(environment.apiUrl + '/CreateEmployee', obj);
  }

  deleteemployee(id: number) {
    return this.http.post(environment.apiUrl + '/DeleteEmployee', { ...this.apiObj, 'EmployeeID': id });
  }


  getemployeedetailbyid(id: string) {
    return this.http.post(environment.apiUrl + '/GetEmployeeFromID', { ...this.apiObj, 'EmployeeID': id });

  }

}
