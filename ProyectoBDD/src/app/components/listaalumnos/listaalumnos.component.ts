import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-listaalumnos',
  templateUrl: './listaalumnos.component.html',
  styleUrls: ['./listaalumnos.component.css']
})
export class ListaalumnosComponent implements OnInit {
  alumnos: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
