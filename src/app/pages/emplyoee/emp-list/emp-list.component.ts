import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from "../emp.service";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from "@angular/router"
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  rows: [];
  dataSource: any;
  public photUrl1: string;
  public photUrl2: string;
  public name: string;
  public photoname: string;
  totalRecords: number = 0;
  isChecked: boolean = false;
  displayedColumns: string[] = ['Fname', 'Email', 'DesignationName', 'Salary', 'TotalExperience', 'AadharNo', 'AadharPhoto', 'PanNo', 'PanPhoto', 'Actions'];
  // displayedColumns: string[] = ['Fname', 'Email', 'DOB', 'PhoneNumber', 'DesignationName', 'Refrence', 'Salary', 'TotalExperience','Resume', 'AadharNo','AadharPhoto','PanNo','PanPhoto','Actions'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private empService: EmpService, public toastr: ToastrManager, private router: Router) { }

  ngOnInit() {
    this.getEmpList();
  }

  getEmpList() {
    this.empService.getEmployee().subscribe((res: any) => {
      console.log(res);
      if (res['ReturnCode'] == 1) {
        this.rows = res.Data;
        this.totalRecords = this.rows.length;
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.rows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      }
    });
  }

  deleteEmployee(id: number) {
    var result = confirm("Want to delete employee with id : " + id + ' ?');
    if (result) {
      this.empService.deleteemployee(id).subscribe((res: any) => {
        if (res.ReturnCode === '1') {
          this.getEmpList();
          this.toastr.successToastr('Delete Empoyee Suucessfully Done.', 'Success!', { toastTimeout: 3000 });
        } else {
          this.toastr.errorToastr('Error on server side Or Delete Employee.', 'Oops!', { toastTimeout: 3000, showCloseButton: true });
        }
      });
    }
  }


  updateEmployee(id: number) {
    this.router.navigate(['/new-emp'], { queryParams: { Id: id } });
    // this.router.navigate(['/new-emp'], { queryParams: { Id: id }, skipLocationChange: true});

  }

  openDialog(path1, path2, name, photoname) {
    this.photUrl1 = path1;
    this.photUrl2 = path2;
    this.name = name;
    this.photoname = photoname;
  }


  setPopupUrl(path1, path2) {
    this.photUrl1 = path2;
    this.photUrl2 = path1;
    console.log(this.photoname);
    this.photoname = this.photoname === 'Aadhar' ? 'Pan' : 'Aadhar';
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
