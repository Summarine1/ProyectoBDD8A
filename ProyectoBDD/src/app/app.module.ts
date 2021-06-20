//Import modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
import { ProjectsFormComponent } from './shared/components/projects-form/projects-form.component';
import { CrudPaymentWindowsComponent } from './components/windows/crud-payment-windows/crud-payment-windows.component';
import { CreatePayWindowsComponent } from './components/windows/crud-payment-windows/create-pay-windows/create-pay-windows.component';
import { ListPayWindowsComponent } from './components/windows/crud-payment-windows/list-pay-windows/list-pay-windows.component';
import { UpdatePayWindowsComponent } from './components/windows/crud-payment-windows/update-pay-windows/update-pay-windows.component';
import { PaymentFormComponent } from './shared/components/payment-form/payment-form.component';
import { CrudAssignWindowsComponent } from './components/windows/crud-assign-windows/crud-assign-windows.component';
import { ListAsgWindowsComponent } from './components/windows/crud-assign-windows/list-asg-windows/list-asg-windows.component';
import { CreateAsgWindowsComponent } from './components/windows/crud-assign-windows/create-asg-windows/create-asg-windows.component';
import { UpdateAsgWindowsComponent } from './components/windows/crud-assign-windows/update-asg-windows/update-asg-windows.component';
import { AssignFormComponent } from './shared/components/assign-form/assign-form.component';
import { CrudLinuxComponent } from './components/crud-linux/crud-linux.component';
import { CrudAssignLinuxComponent } from './components/linux/crud-assign-linux/crud-assign-linux.component';
import { CrudEmpLinuxComponent } from './components/linux/crud-emp-linux/crud-emp-linux.component';
import { CrudPaymentLinuxComponent } from './components/linux/crud-payment-linux/crud-payment-linux.component';
import { CrudProjLinuxComponent } from './components/linux/crud-proj-linux/crud-proj-linux.component';
import { CreateAsgLinuxComponent } from './components/linux/crud-assign-linux/create-asg-linux/create-asg-linux.component';
import { ListAsgLinuxComponent } from './components/linux/crud-assign-linux/list-asg-linux/list-asg-linux.component';
import { UpdateAsgLinuxComponent } from './components/linux/crud-assign-linux/update-asg-linux/update-asg-linux.component';
import { CreateProjLinuxComponent } from './components/linux/crud-proj-linux/create-proj-linux/create-proj-linux.component';
import { UpdateProjLinuxComponent } from './components/linux/crud-proj-linux/update-proj-linux/update-proj-linux.component';
import { ListProjLinuxComponent } from './components/linux/crud-proj-linux/list-proj-linux/list-proj-linux.component';
import { ListEmpLinuxComponent } from './components/linux/crud-emp-linux/list-emp-linux/list-emp-linux.component';
import { UpdateEmpLinuxComponent } from './components/linux/crud-emp-linux/update-emp-linux/update-emp-linux.component';
import { CreateEmpLinuxComponent } from './components/linux/crud-emp-linux/create-emp-linux/create-emp-linux.component';
import { CreatePayLinuxComponent } from './components/linux/crud-payment-linux/create-pay-linux/create-pay-linux.component';
import { UpdatePayLinuxComponent } from './components/linux/crud-payment-linux/update-pay-linux/update-pay-linux.component';
import { ListPayLinuxComponent } from './components/linux/crud-payment-linux/list-pay-linux/list-pay-linux.component';

//Servicios
import { EmployeesService } from './services/employees/employees.service';
import { ProjectService } from './services/project/project.service';
import { AssignService } from './services/assign/assign.service';
import { PaymentService } from './services/payment/payment.service';
import { GraficaComponent } from './components/grafica/grafica.component';
import { LinuxService } from './services/linux/linux.service';
import { WindowsService } from './services/windows/windows.service';


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
    AssignFormComponent,
    CrudLinuxComponent,
    CrudAssignLinuxComponent,
    CrudEmpLinuxComponent,
    CrudPaymentLinuxComponent,
    CrudProjLinuxComponent,
    CreateAsgLinuxComponent,
    ListAsgLinuxComponent,
    UpdateAsgLinuxComponent,
    CreateProjLinuxComponent,
    UpdateProjLinuxComponent,
    ListProjLinuxComponent,
    ListEmpLinuxComponent,
    UpdateEmpLinuxComponent,
    CreateEmpLinuxComponent,
    CreatePayLinuxComponent,
    UpdatePayLinuxComponent,
    ListPayLinuxComponent,
    GraficaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    EmployeesService,
    ProjectService,
    AssignService,
    PaymentService,
	LinuxService,
	WindowsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
