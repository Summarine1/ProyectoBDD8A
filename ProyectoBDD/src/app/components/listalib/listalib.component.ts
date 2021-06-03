import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';


@Component({
  selector: 'app-listalib',
  templateUrl: './listalib.component.html',
  styleUrls: ['./listalib.component.css']
})
export class ListalibComponent implements OnInit {

  libros: any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
