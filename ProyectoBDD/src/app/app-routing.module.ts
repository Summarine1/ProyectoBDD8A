import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './components/crud.component';
import { CrudWindowsComponent } from './components/crud-windows/crud-windows.component';
import { CrudEmpWindowsComponent } from './components/windows/crud-emp-windows/crud-emp-windows.component';
import { UpdateEmpWindowsComponent } from './components/windows/update-emp-windows/update-emp-windows.component';
import { CreateEmpWindowsComponent } from './components/windows/create-emp-windows/create-emp-windows.component';
import { ListEmpWindowsComponent } from './components/windows/list-emp-windows/list-emp-windows.component';

const routes: Routes = [
  { path: '*', component: CrudComponent },
  {
    path: 'windows', component: CrudWindowsComponent, children: [
      {
        path: 'emp', component: CrudEmpWindowsComponent, children: [
          {path: '', component: ListEmpWindowsComponent},
          { path: 'update', component: UpdateEmpWindowsComponent },
          { path: 'new', component: CreateEmpWindowsComponent }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
