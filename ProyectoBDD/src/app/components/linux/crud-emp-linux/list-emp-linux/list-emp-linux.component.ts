import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-emp-linux',
  templateUrl: './list-emp-linux.component.html',
  styleUrls: ['./list-emp-linux.component.css']
})
export class ListEmpLinuxComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(item: any): void{
    this.navigationExtras.state = {value: item};
    this.router.navigate(['linux/emp/update'], this.navigationExtras);
  }

  onGoToDelete(item: any): void{}
  onGoToNew(): void{
    this.navigationExtras.state = {value: null};
    this.router.navigate(['linux/emp/new'], this.navigationExtras);
  }

}
