import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-proj-windows',
  templateUrl: './list-proj-windows.component.html',
  styleUrls: ['./list-proj-windows.component.css']
})
export class ListProjWindowsComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any){
    this.navigationExtras.state = {value: item};
    this.router.navigate(['windows/proj/update'], this.navigationExtras);
  }

  onGoToDelete(item: any){}

  onGoToNew(): void{
    this.navigationExtras.state = {value: null};
    this.router.navigate(['windows/proj/new']);
  }

}
