import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-crud-emp-windows',
  templateUrl: './crud-emp-windows.component.html',
  styleUrls: ['./crud-emp-windows.component.css']
})
export class CrudEmpWindowsComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToNew(){
    this.navigationExtras.state = {value: null}
    this.router.navigate(['windows/emp/new']);
  }

}
