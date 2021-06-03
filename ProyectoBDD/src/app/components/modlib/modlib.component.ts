import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-modlib',
  templateUrl: './modlib.component.html',
  styleUrls: ['./modlib.component.css']
})
export class ModlibComponent implements OnInit {
  materias: any[] = [];
  modLibro: FormGroup;

  constructor() {
    this.modLibro = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl(''),
      year: new FormControl(0),
      editorial: new FormControl(''),
      materia: new FormControl(''),
      archivo: new FormControl('')
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
