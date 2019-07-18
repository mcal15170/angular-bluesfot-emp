import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {Router} from "@angular/router"


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private api: AuthService, public toastr: ToastrManager,private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.api.login(this.loginForm.value).subscribe(res => {
      console.log(res);
      console.log({...this.loginForm.value, APIKey:123});
      
      if (res['ReturnCode'] == 1) {
        // succes

        this.toastr.successToastr('Login Suucessfully Done.', 'Success!', { toastTimeout: 3000 });
        localStorage.setItem('token', res['ReturnCode']);
        localStorage.setItem('DesignationList', JSON.stringify(res['Data']['DesignationList']));
        this.router.navigate(['page/home']);

      } else {
        // error
        this.toastr.errorToastr('Errors In Login ,Plese Check Your Login.', 'Oops!', { toastTimeout: 3000,showCloseButton:true });

      }
      this.loginForm.reset();
      this.submitted = false;

    });


  }
}
