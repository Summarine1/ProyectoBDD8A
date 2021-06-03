import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-crud-alumno',
  templateUrl: './crud-alumno.component.html',
  styleUrls: ['./crud-alumno.component.css']
})
export class CrudAlumnoComponent implements OnInit {
  grupos: any[];
  AltaAlumno: FormGroup;

  constructor() {
    this.grupos = [];

    this.AltaAlumno = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      materno: new FormControl(''),
      sexo: new FormControl('F'),
      password: new FormControl('', [Validators.minLength(6), Validators.maxLength(15)]),
      grupo: new FormControl('')
    }, [Validators.required]);

  }

  ngOnInit(): void {
  }

  onSubmit()
  {
  }

}
