import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modalum',
  templateUrl: './modalum.component.html',
  styleUrls: ['./modalum.component.css']
})
export class ModalumComponent implements OnInit {

  grupos: any[] = [];
  modAlumno: FormGroup;

  constructor() {
    this.modAlumno = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      materno: new FormControl(''),
      sexo: new FormControl('F'),
      password: new FormControl('', [Validators.minLength(6), Validators.maxLength(15)]),
      grupo: new FormControl('')
    }, [Validators.required]);
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
