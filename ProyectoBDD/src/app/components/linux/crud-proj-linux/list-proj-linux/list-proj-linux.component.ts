import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-proj-linux',
  templateUrl: './list-proj-linux.component.html',
  styleUrls: ['./list-proj-linux.component.css']
})
export class ListProjLinuxComponent implements OnInit {
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
    this.router.navigate(['linux/proj/update'], this.navigationExtras);
  }

  onGoToDelete(item: any){}

  onGoToNew(): void{
    this.navigationExtras.state = {value: null};
    this.router.navigate(['linux/proj/new']);
  }

}
