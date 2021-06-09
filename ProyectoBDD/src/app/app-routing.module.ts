import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud.component';

import { CrudWindowsComponent } from './components/crud-windows/crud-windows.component';
import { CrudEmpWindowsComponent } from './components/windows/crud-emp-windows/crud-emp-windows.component';
import { UpdateEmpWindowsComponent } from './components/windows/crud-emp-windows/update-emp-windows/update-emp-windows.component';
import { CreateEmpWindowsComponent } from './components/windows/crud-emp-windows/create-emp-windows/create-emp-windows.component';
import { ListEmpWindowsComponent } from './components/windows/crud-emp-windows/list-emp-windows/list-emp-windows.component';
import { CrudProjWindowsComponent } from './components/windows/crud-proj-windows/crud-proj-windows.component';
import { ListProjWindowsComponent } from './components/windows/crud-proj-windows/list-proj-windows/list-proj-windows.component';
import { CreateProjWindowsComponent } from './components/windows/crud-proj-windows/create-proj-windows/create-proj-windows.component';
import { UpdateProjWindowsComponent } from './components/windows/crud-proj-windows/update-proj-windows/update-proj-windows.component';
import { CrudPaymentWindowsComponent } from './components/windows/crud-payment-windows/crud-payment-windows.component';
import { ListPayWindowsComponent } from './components/windows/crud-payment-windows/list-pay-windows/list-pay-windows.component';
import { CreatePayWindowsComponent } from './components/windows/crud-payment-windows/create-pay-windows/create-pay-windows.component';
import { UpdatePayWindowsComponent } from './components/windows/crud-payment-windows/update-pay-windows/update-pay-windows.component';
import { CrudAssignWindowsComponent } from './components/windows/crud-assign-windows/crud-assign-windows.component';
import { ListAsgWindowsComponent } from './components/windows/crud-assign-windows/list-asg-windows/list-asg-windows.component';
import { CreateAsgWindowsComponent } from './components/windows/crud-assign-windows/create-asg-windows/create-asg-windows.component';
import { UpdateAsgWindowsComponent } from './components/windows/crud-assign-windows/update-asg-windows/update-asg-windows.component';

import { CrudLinuxComponent } from './components/crud-linux/crud-linux.component';
import { CrudEmpLinuxComponent } from './components/linux/crud-emp-linux/crud-emp-linux.component';
import { UpdateEmpLinuxComponent } from './components/linux/crud-emp-linux/update-emp-linux/update-emp-linux.component';
import { CreateEmpLinuxComponent } from './components/linux/crud-emp-linux/create-emp-linux/create-emp-linux.component';
import { ListEmpLinuxComponent } from './components/linux/crud-emp-linux/list-emp-linux/list-emp-linux.component';
import { CrudProjLinuxComponent } from './components/linux/crud-proj-linux/crud-proj-linux.component';
import { ListProjLinuxComponent } from './components/linux/crud-proj-linux/list-proj-linux/list-proj-linux.component';
import { CreateProjLinuxComponent } from './components/linux/crud-proj-linux/create-proj-linux/create-proj-linux.component';
import { UpdateProjLinuxComponent } from './components/linux/crud-proj-linux/update-proj-linux/update-proj-linux.component';
import { CrudPaymentLinuxComponent } from './components/linux/crud-payment-linux/crud-payment-linux.component';
import { ListPayLinuxComponent } from './components/linux/crud-payment-linux/list-pay-linux/list-pay-linux.component';
import { CreatePayLinuxComponent } from './components/linux/crud-payment-linux/create-pay-linux/create-pay-linux.component';
import { UpdatePayLinuxComponent } from './components/linux/crud-payment-linux/update-pay-linux/update-pay-linux.component';
import { CrudAssignLinuxComponent } from './components/linux/crud-assign-linux/crud-assign-linux.component';
import { ListAsgLinuxComponent } from './components/linux/crud-assign-linux/list-asg-linux/list-asg-linux.component';
import { CreateAsgLinuxComponent } from './components/linux/crud-assign-linux/create-asg-linux/create-asg-linux.component';
import { UpdateAsgLinuxComponent } from './components/linux/crud-assign-linux/update-asg-linux/update-asg-linux.component';

const routes: Routes = [
  { path: '*', component: CrudComponent },

  {
    path: 'windows', component: CrudWindowsComponent, children: [
      {
        path: 'emp', component: CrudEmpWindowsComponent, children: [
          { path: '', component: ListEmpWindowsComponent },
          { path: 'update', component: UpdateEmpWindowsComponent },
          { path: 'new', component: CreateEmpWindowsComponent },
          { path: 'list', component: ListEmpWindowsComponent },
        ]
      },
      {
        path: 'proj', component: CrudProjWindowsComponent, children: [
          { path: '', component: ListProjWindowsComponent },
          { path: 'new', component: CreateProjWindowsComponent },
          { path: 'update', component: UpdateProjWindowsComponent },
          { path: 'list', component: ListProjWindowsComponent },
        ]
      },
      {
        path: 'pay', component: CrudPaymentWindowsComponent, children: [
          { path: '', component: ListPayWindowsComponent },
          { path: 'new', component: CreatePayWindowsComponent },
          { path: 'update', component: UpdatePayWindowsComponent },
          {path: 'list', component: ListPayWindowsComponent}
        ]
      },
      {
        path: 'asg', component: CrudAssignWindowsComponent, children: [
          {path: '', component: ListAsgWindowsComponent},
          {path: 'new', component: CreateAsgWindowsComponent},
          {path: 'update', component: UpdateAsgWindowsComponent},
          {path: 'list', component: ListAsgWindowsComponent},
        ]
      }
    ]
  },

  {
    path: 'linux', component: CrudLinuxComponent, children: [
      {
        path: 'emp', component: CrudEmpLinuxComponent, children: [
          { path: '', component: ListEmpLinuxComponent },
          { path: 'update', component: UpdateEmpLinuxComponent },
          { path: 'new', component: CreateEmpLinuxComponent },
          { path: 'list', component: ListEmpLinuxComponent },
        ]
      },
      {
        path: 'proj', component: CrudProjLinuxComponent, children: [
          { path: '', component: ListProjLinuxComponent },
          { path: 'new', component: CreateProjLinuxComponent },
          { path: 'update', component: UpdateProjLinuxComponent },
          { path: 'list', component: ListProjLinuxComponent },
        ]
      },
      {
        path: 'pay', component: CrudPaymentLinuxComponent, children: [
          { path: '', component: ListPayLinuxComponent },
          { path: 'new', component: CreatePayLinuxComponent },
          { path: 'update', component: UpdatePayLinuxComponent },
          {path: 'list', component: ListPayLinuxComponent}
        ]
      },
      {
        path: 'asg', component: CrudAssignLinuxComponent, children: [
          {path: '', component: ListAsgLinuxComponent},
          {path: 'new', component: CreateAsgLinuxComponent},
          {path: 'update', component: UpdateAsgLinuxComponent},
          {path: 'list', component: ListAsgLinuxComponent},
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
