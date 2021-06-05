import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-asg-windows',
  templateUrl: './list-asg-windows.component.html',
  styleUrls: ['./list-asg-windows.component.css']
})
export class ListAsgWindowsComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state = {value: item};
    this.router.navigate(['windows/asg/update'], this.navigationExtras);
  }

  onGoToDelete(item: any){}

  onGoToNew(){
    this.navigationExtras.state = {value: null};
    this.router.navigate(['windows/asg/new']);
  }

}
