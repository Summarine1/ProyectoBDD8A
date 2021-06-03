import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modgrupos',
  templateUrl: './modgrupos.component.html',
  styleUrls: ['./modgrupos.component.css']
})
export class ModgruposComponent implements OnInit {
  profesores: any[] = [];
  modGrupo: FormGroup;
  
  constructor() {
    this.modGrupo = new FormGroup({
      id: new FormControl(''),
      grado: new FormControl(''),
      clase: new FormControl(''),
      profesor: new FormControl(''),
      ciclo_inicio: new FormControl(''),
      ciclo_final: new FormControl('')
    }, [Validators.required]);
  }

  buscar(id:string){
  }
  ngOnInit(): void {
  }

  onSubmit(){
  }

  borrar()
  {
  }

}
