import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-emp-windows',
  templateUrl: './list-emp-windows.component.html',
  styleUrls: ['./list-emp-windows.component.css']
})
export class ListEmpWindowsComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void{
    this.navigationExtras.state = {value: item};
    this.router.navigate(['windows/emp/update'], this.navigationExtras);
  }

  onGoToDelete(item: any): void{}
  onGoToNew(): void{
    this.navigationExtras.state = {value: null};
    this.router.navigate(['windows/emp/new'], this.navigationExtras);
  }

}