import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modprof',
  templateUrl: './modprof.component.html',
  styleUrls: ['./modprof.component.css']
})
export class ModprofComponent implements OnInit {
  modProfesor: FormGroup;

  constructor() { 
    this.modProfesor = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      materno: new FormControl(''),
      telefono: new FormControl(''),
      correo: new FormControl(''),
      sexo: new FormControl(''),
      password: new FormControl(''),
    });
  }

  buscar(id:string){
  }
  ngOnInit(): void {
  }

  onSubmit()
  {
  }

   
  borrar()
  {
  }



}
