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
import { ListEmpWindowsComponent } from './components/windows/list-emp-windows/list-emp-windows.component';
import { UpdateEmpWindowsComponent } from './components/windows/update-emp-windows/update-emp-windows.component';
import { CreateEmpWindowsComponent } from './components/windows/create-emp-windows/create-emp-windows.component';
import { CrudEmpWindowsComponent } from './components/windows/crud-emp-windows/crud-emp-windows.component';
import { CrudWindowsComponent } from './components/crud-windows/crud-windows.component';
import { EmployeeFormComponent } from './shared/components/employee-form/employee-form.component';

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
