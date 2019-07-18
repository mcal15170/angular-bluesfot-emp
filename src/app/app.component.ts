import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Location } from "@angular/common";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'ang-employee';
  route: string;
  status: boolean

  constructor(private location: Location, private router: Router) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.route = location.path();
        this.status = this.route === '/login' ? false : true;

      }
    });
  }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      if (this.location.path() === '/login') {
        window.location.href = '/page/home';
      }
    }
  }

}
