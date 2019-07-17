import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiServiceService } from '../ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private uiService: UiServiceService) { }

  ngOnInit() {
  }

  logout() {
    this.uiService.logout();
    this.router.navigate(['/login'])
  }

}
