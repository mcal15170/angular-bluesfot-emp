import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpComponent } from './emp/emp.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmpService } from './emp.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { NgxImageZoomModule } from 'ngx-image-zoom';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatStepperModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    // BsDatepickerModule,
    NgxImageZoomModule.forRoot()
  ],
  declarations: [
    EmpComponent,
    EmpListComponent,
    NewEmpComponent
  ],
  providers: [EmpService]
})
export class EmplyoeeModule { }
