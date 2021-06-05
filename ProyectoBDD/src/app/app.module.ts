//Import modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

//Import Components
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListEmpWindowsComponent } from './components/windows/crud-emp-windows/list-emp-windows/list-emp-windows.component';
import { UpdateEmpWindowsComponent } from './components/windows/crud-emp-windows/update-emp-windows/update-emp-windows.component';
import { CreateEmpWindowsComponent } from './components/windows/crud-emp-windows/create-emp-windows/create-emp-windows.component';
import { CrudEmpWindowsComponent } from './components/windows/crud-emp-windows/crud-emp-windows.component';
import { CrudWindowsComponent } from './components/crud-windows/crud-windows.component';
import { EmployeeFormComponent } from './shared/components/employee-form/employee-form.component';
import { CrudProjWindowsComponent } from './components/windows/crud-proj-windows/crud-proj-windows.component';
import { ListProjWindowsComponent } from './components/windows/crud-proj-windows/list-proj-windows/list-proj-windows.component';
import { CreateProjWindowsComponent } from './components/windows/crud-proj-windows/create-proj-windows/create-proj-windows.component';
import { UpdateProjWindowsComponent } from './components/windows/crud-proj-windows/update-proj-windows/update-proj-windows.component';
import {ProjectsFormComponent} from './shared/components/projects-form/projects-form.component';
import { CrudPaymentWindowsComponent } from './components/windows/crud-payment-windows/crud-payment-windows.component';
import { CreatePayWindowsComponent } from './components/windows/crud-payment-windows/create-pay-windows/create-pay-windows.component';
import { ListPayWindowsComponent } from './components/windows/crud-payment-windows/list-pay-windows/list-pay-windows.component';
import { UpdatePayWindowsComponent } from './components/windows/crud-payment-windows/update-pay-windows/update-pay-windows.component';
import { PaymentFormComponent } from './shared/components/payment-form/payment-form.component';
import { CrudAssignWindowsComponent } from './components/windows/crud-assign-windows/crud-assign-windows.component';
import { ListAsgWindowsComponent } from './components/windows/crud-assign-windows/list-asg-windows/list-asg-windows.component';
import { CreateAsgWindowsComponent } from './components/windows/crud-assign-windows/create-asg-windows/create-asg-windows.component';
import { UpdateAsgWindowsComponent } from './components/windows/crud-assign-windows/update-asg-windows/update-asg-windows.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    NavbarComponent,
    ListEmpWindowsComponent,
    UpdateEmpWindowsComponent,
    CreateEmpWindowsComponent,
    CrudEmpWindowsComponent,
    CrudWindowsComponent,
    EmployeeFormComponent,
    CrudProjWindowsComponent,
    ListProjWindowsComponent,
    CreateProjWindowsComponent,
    UpdateProjWindowsComponent,
    ProjectsFormComponent,
    CrudPaymentWindowsComponent,
    CreatePayWindowsComponent,
    ListPayWindowsComponent,
    UpdatePayWindowsComponent,
    PaymentFormComponent,
    CrudAssignWindowsComponent,
    ListAsgWindowsComponent,
    CreateAsgWindowsComponent,
    UpdateAsgWindowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
