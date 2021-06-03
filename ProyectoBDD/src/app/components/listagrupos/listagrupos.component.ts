import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud/crud.service';

@Component({
  selector: 'app-listagrupos',
  templateUrl: './listagrupos.component.html',
  styleUrls: ['./listagrupos.component.css']
})
export class ListagruposComponent implements OnInit {
  grupos:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
