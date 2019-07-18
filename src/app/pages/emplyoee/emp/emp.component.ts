import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToForm(){
    this.router.navigate(['page/new-emp']);
  }

}
