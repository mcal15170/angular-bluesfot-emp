import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { formatDate } from '@angular/common';
import { EmpService } from '../emp.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
  personaInfoGroup: FormGroup;
  BusinessInfoGroup: FormGroup;
  securitiInfoGroup: FormGroup;
  busInfoSubmit: boolean = false;
  secInfoSubmit: boolean = false;
  desOpt: [];
  adharMessage: boolean;
  panMessage: boolean;
  resumeMessage: boolean;
  public adharImgpath;
  public panImgpath;
  public resumePath;
  adharUrlPath: any;
  panUrlPath: any
  resumeUrlPath: any;
  AadharPhoto: File = null;
  PanPhoto: File = null;
  Resume: File = null;
  emp_DOB: Date;
  startDate = new Date(1990, 0, 1);
  updateId: string;
  empDatabyId: [];
  btnLable: string = 'Save';
  IsAadharUpdate: string;
  IsPanUpdate: string;
  IsResumeUpdate: string;




  constructor(private formBuilder: FormBuilder, private empService: EmpService, private activatedRoute: ActivatedRoute, public toastr: ToastrManager, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.updateId = params.Id;
    });
    if (this.updateId) {
      this.btnLable = "Update";
      this.empService.getemployeedetailbyid(this.updateId).subscribe((res: any) => {
        if (res.ReturnCode === '1') {
          this.empDatabyId = res.Data;
          console.log(this.empDatabyId);
          // this.personaInfoGroup 
          this.personaInfoGroup.get('Fname').setValue(this.empDatabyId['Fname'] ? this.empDatabyId['Fname'] : '');
          this.personaInfoGroup.get('Mname').setValue(this.empDatabyId['Mname'] ? this.empDatabyId['Mname'] : '');
          this.personaInfoGroup.get('Lname').setValue(this.empDatabyId['Lname'] ? this.empDatabyId['Lname'] : '');
          this.personaInfoGroup.get('DOB').setValue(this.empDatabyId['DOB'] ? new Date(this.empDatabyId['DOB']) : '');
          this.personaInfoGroup.get('Email').setValue(this.empDatabyId['Email'] ? this.empDatabyId['Email'] : '');
          this.personaInfoGroup.get('Address').setValue(this.empDatabyId['Address'] ? this.empDatabyId['Address'] : '');
          this.personaInfoGroup.get('Phoneno').setValue(this.empDatabyId['PhoneNumber'] ? this.empDatabyId['PhoneNumber'] : '');
          // this.BusinessInfoGroup
          // this.BusinessInfoGroup.get('Resume').setValue(this.empDatabyId['LastUpdatedResume'] ? this.empDatabyId['LastUpdatedResume'] : '');
          this.BusinessInfoGroup.get('Resume').clearValidators();
          this.BusinessInfoGroup.get('Resume').updateValueAndValidity();
          this.resumeUrlPath = this.empDatabyId['LastUpdatedResume'] ? this.empDatabyId['LastUpdatedResume'] : '../../../../assets/document/sample.pdf';
          this.BusinessInfoGroup.get('Refrence').setValue(this.empDatabyId['Refrence'] ? this.empDatabyId['Refrence'] : '');
          this.BusinessInfoGroup.get('TotalExperience').setValue(this.empDatabyId['TotalExperience'] ? this.empDatabyId['TotalExperience'] : '');
          this.BusinessInfoGroup.get('Salary').setValue(this.empDatabyId['Salary'] ? this.empDatabyId['Salary'] : '');
          this.BusinessInfoGroup.get('Designation').setValue(this.empDatabyId['DesignationID'] ? this.empDatabyId['DesignationID'] : '');
          this.BusinessInfoGroup.get('DOJ').setValue(this.empDatabyId['DOJ'] ? new Date(this.empDatabyId['DOJ']) : '');
          this.BusinessInfoGroup.get('DOL').setValue(this.empDatabyId['DOL'] ? new Date(this.empDatabyId['DOL']) : '');
          // this.securitiInfoGroup
          this.securitiInfoGroup.get('Aadharno').setValue(this.empDatabyId['AadharNo'] ? this.empDatabyId['AadharNo'] : '');
          this.adharUrlPath = this.empDatabyId['AadharPhoto'] ? this.empDatabyId['AadharPhoto'] : '../../../../assets/img/aadhar-card.jpg';
          this.securitiInfoGroup.get('AadharPhoto').clearValidators();
          this.securitiInfoGroup.get('AadharPhoto').updateValueAndValidity();
          // this.securitiInfoGroup.get('AadharPhoto').setValue(this.empDatabyId['AadharPhoto'] ? this.empDatabyId['AadharPhoto'] : '');
          this.securitiInfoGroup.get('Panno').setValue(this.empDatabyId['PanNo'] ? this.empDatabyId['PanNo'] : '');
          this.panUrlPath = this.empDatabyId['PanPhoto'] ? this.empDatabyId['PanPhoto'] : '../../../../assets/img/pancard_service.png';
          this.securitiInfoGroup.get('PanPhoto').clearValidators();
          this.securitiInfoGroup.get('PanPhoto').updateValueAndValidity();
          // this.securitiInfoGroup.get('PanPhoto').setValue(this.empDatabyId['PanPhoto'] ? this.empDatabyId['PanPhoto'] : '');
        }
      })
    }



    this.personaInfoGroup = this.formBuilder.group({
      Fname: ['', Validators.required],
      Mname: ['', Validators.required],
      Lname: ['', Validators.required],
      DOB: ['', Validators.compose([Validators.required])],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', Validators.required],
      Phoneno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      // gender: ['male', Validators.compose([])]
    });

    this.BusinessInfoGroup = this.formBuilder.group({
      Resume: ['', Validators.required],
      Refrence: ['', [Validators.required]],
      TotalExperience: ['', [Validators.required, Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]],
      Salary: ['', [Validators.required, Validators.pattern('[+-]?([0-9]*[,])?[0-9]+')]],
      Designation: ['', [Validators.required]],
      DOJ: ['', Validators.compose([Validators.required])],
      DOL: ['', Validators.compose([])],
    });

    this.securitiInfoGroup = this.formBuilder.group({
      Aadharno: ['', Validators.compose([Validators.required, Validators.minLength(16), Validators.pattern('^[0-9]*$')])],
      AadharPhoto: ['', Validators.compose([Validators.required])],
      Panno: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      PanPhoto: ['', Validators.compose([Validators.required])]
    });

    this.desOpt = JSON.parse(localStorage.getItem('DesignationList'));

  }

  onSubmit() {

    this.secInfoSubmit = true;

    // stop here if form is invalid
    if (this.personaInfoGroup.invalid || this.BusinessInfoGroup.invalid || this.securitiInfoGroup.invalid) {
      this.toastr.errorToastr('Form Date Invalid.', 'Oops!', { toastTimeout: 3000, showCloseButton: true });
      return;
    } else if (this.personaInfoGroup.valid && this.BusinessInfoGroup.valid && this.securitiInfoGroup.valid) {
      const formValue = {
        ...this.personaInfoGroup.value,
        ...this.BusinessInfoGroup.value,
        ...this.securitiInfoGroup.value
      }




      console.log(formValue.DOL);
      const formData = new FormData();
      formData.append('APIKey', '123');
      formData.append('Fname', formValue.Fname);
      formData.append('Mname', formValue.Mname);
      formData.append('Lname', formValue.Lname);
      formData.append('Email', formValue.Email);
      formData.append('Address', formValue.Address);
      formData.append('Phoneno', formValue.Phoneno);
      // formData.append('gender', formValue.gender);
      formData.append('Refrence', formValue.Refrence);
      formData.append('TotalExperience', formValue.TotalExperience);
      formData.append('Salary', formValue.Salary);
      formData.append('Designation', formValue.Designation);
      formData.append('Panno', formValue.Panno);
      formData.append('Aadharno', formValue.Aadharno);
      formData.append('DOB', formatDate(formValue.DOB, 'MM/dd/yyyy', 'en'));
      formData.append('DOJ', formatDate(formValue.DOJ, 'MM/dd/yyyy', 'en'));
      formData.append('DOL', formValue.DOL ? (formatDate(formValue.DOL, 'MM/dd/yyyy', 'en')) : '');
      formData.append('AadharPhoto', this.AadharPhoto);
      formData.append('PanPhoto', this.PanPhoto);
      formData.append('Resume', this.Resume);
      //  new Response(formData).text().then(console.log);
      // formData.forEach((value, key) => {
      //   console.log(key + '' + value);
      // });

      if (this.updateId) {
        // add update params
        this.IsAadharUpdate = this.AadharPhoto ? '1' : '0';
        this.IsPanUpdate = this.PanPhoto ? '1' : '0';
        this.IsResumeUpdate = this.Resume ? '1' : '0';

        console.log(this.IsAadharUpdate);
        console.log(this.IsPanUpdate);
        console.log(this.IsResumeUpdate);

        formData.append('EmployeeID', this.updateId);
        formData.append('IsAadharUpdate', this.IsAadharUpdate);
        formData.append('IsPanUpdate', this.IsPanUpdate);
        formData.append('IsResumeUpdate', this.IsResumeUpdate);

      }

      this.empService.addemployeedetail(formData).subscribe((res: any) => {
        console.log(res);
        if (res.ReturnCode === '1') {
          this.router.navigate(['page/emp']);
          this.toastr.successToastr(this.updateId ? 'Update Employee Suucessfully Done.' : 'Registration Suucessfully Done.', 'Success!', { toastTimeout: 3000 });
        } else {
          this.toastr.errorToastr(this.updateId ? 'Error on server side & Update Employee.' : 'Error on server side & Create Employee.', 'Oops!', { toastTimeout: 3000, showCloseButton: true });
        }
      });


    }
  }





  previewadhar(files: FileList) {
    if (files.length === 0) {
      this.adharUrlPath = '';
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.adharMessage = true;
      return;
    }
    this.adharMessage = false;
    const reader = new FileReader();
    this.adharImgpath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.adharUrlPath = reader.result;
    };
    this.AadharPhoto = files.item(0);
  }


  previewpan(files: FileList) {
    if (files.length === 0) {
      this.panUrlPath = '';
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.panMessage = true;
      return;
    }
    this.panMessage = false;
    const reader = new FileReader();
    this.panImgpath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.panUrlPath = reader.result;
    };
    this.PanPhoto = files.item(0);
    // console.log(this.PanPhoto = files.item(0));
    // this.selectedpanFile = <File>event.target.files[0]
  }

  onResumeselected(files: FileList) {
    this.Resume = files.item(0);
  }

  // onResumeselected(files: FileList) {
  //   if (files.length === 0) {
  //     this.resumeUrlPath = '';
  //     return;
  //   }
  //   const mimeType = files[0].type;
  //   if (mimeType.match('pdf.*|doc.*|txt.*|docx.*') == null) {
  //     this.resumeMessage = true;
  //     return;
  //   }
  //   this.resumeMessage = false;
  //   const reader = new FileReader();
  //   this.resumePath = files;
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (_event) => {
  //     this.resumeUrlPath = reader.result;
  //   };

  //   this.Resume = files.item(0);
  // }

  get p() { return this.personaInfoGroup.controls; }
  get b() { return this.BusinessInfoGroup.controls; }
  get s() { return this.securitiInfoGroup.controls; }

  next() {
    this.busInfoSubmit = true;
  }



}
