//Import modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Import Components
import { AppComponent } from './app.component';
import { CrudComponent } from './components/crud.component';
import { CrudAlumnoComponent } from './components/crud-alumno/crud-alumno.component';
import { CrudGrupoComponent } from './components/crud-grupo/crud-grupo.component';
import { CrudLibroComponent } from './components/crud-libro/crud-libro.component';
import { CrudProfesorComponent } from './components/crud-profesor/crud-profesor.component';
import { ListaalumnosComponent } from './components/listaalumnos/listaalumnos.component';
import { ListagruposComponent } from './components/listagrupos/listagrupos.component';
import { ListalibComponent } from './components/listalib/listalib.component';
import { ListaprofsComponent } from './components/listaprofs/listaprofs.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    CrudAlumnoComponent,
    CrudGrupoComponent,
    CrudLibroComponent,
    CrudProfesorComponent,
    ListaalumnosComponent,
    ListagruposComponent,
    ListalibComponent,
    ListaprofsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
