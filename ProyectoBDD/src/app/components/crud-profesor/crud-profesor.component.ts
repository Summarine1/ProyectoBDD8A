import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-crud-profesor',
  templateUrl: './crud-profesor.component.html',
  styleUrls: ['./crud-profesor.component.css']
  

})

export class CrudProfesorComponent implements OnInit {
  AltaProfesor: FormGroup;

  constructor() {
    this.AltaProfesor = new FormGroup({
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

  ngOnInit(): void {
  }

  onSubmit()
  {
  }

}
