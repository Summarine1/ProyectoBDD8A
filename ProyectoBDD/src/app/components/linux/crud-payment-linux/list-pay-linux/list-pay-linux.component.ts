import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-pay-linux',
  templateUrl: './list-pay-linux.component.html',
  styleUrls: ['./list-pay-linux.component.css']
})
export class ListPayLinuxComponent implements OnInit {
  navigatonExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any){
    this.navigatonExtras.state = { value: item};
    this.router.navigate(['linux/pay/update'], this.navigatonExtras);

  }

  onGoToDelete(item: any){}

  onGoToNew(){
    this.navigatonExtras.state = {value: null};
    this.router.navigate(['linux/pay/new']);
  }

}
