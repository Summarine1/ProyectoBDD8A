import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/services/crud/crud.service';


@Component({
  selector: 'app-crud-libro',
  templateUrl: './crud-libro.component.html',
  styleUrls: ['./crud-libro.component.css']
})
export class CrudLibroComponent implements OnInit {
  AltaLibro: FormGroup;
  materias: any[];

  constructor() {
    this.materias = [];

    this.AltaLibro = new FormGroup({
      id: new FormControl(''),
      titulo: new FormControl(''),
      year: new FormControl(0),
      editorial: new FormControl(''),
      materia: new FormControl(''),
      archivo: new FormControl('')
    });

  }

  ngOnInit(): void {
  }


  onSubmit()
  {
  }

}
