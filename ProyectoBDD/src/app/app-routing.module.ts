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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
