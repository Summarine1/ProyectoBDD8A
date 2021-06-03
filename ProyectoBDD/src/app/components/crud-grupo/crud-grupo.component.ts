import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud/crud.service';
import { CrudComponent } from '../crud.component';

@Component({
  selector: 'app-crud-grupo',
  templateUrl: './crud-grupo.component.html',
  styleUrls: ['./crud-grupo.component.css']
})
export class CrudGrupoComponent implements OnInit {
  AltaGrupo: FormGroup;
  profesores: any[];
  
  constructor() {
    this.profesores = [];

    this.AltaGrupo = new FormGroup({
      id: new FormControl(''),
      grado: new FormControl(''),
      clase: new FormControl(''),
      profesor: new FormControl(''),
      ciclo_inicio: new FormControl(''),
      ciclo_final: new FormControl('')
    }, [Validators.required]);

  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

}
