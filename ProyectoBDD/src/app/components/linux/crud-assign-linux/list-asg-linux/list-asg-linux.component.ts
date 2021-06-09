import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-list-asg-linux',
  templateUrl: './list-asg-linux.component.html',
  styleUrls: ['./list-asg-linux.component.css']
})
export class ListAsgLinuxComponent implements OnInit {
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
    this.router.navigate(['linux/asg/update'], this.navigationExtras);
  }

  onGoToDelete(item: any){}

  onGoToNew(){
    this.navigationExtras.state = {value: null};
    this.router.navigate(['linux/asg/new']);
  }
}