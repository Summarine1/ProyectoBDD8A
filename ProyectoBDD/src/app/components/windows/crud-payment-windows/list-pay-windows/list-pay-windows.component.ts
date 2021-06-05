import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list-pay-windows',
  templateUrl: './list-pay-windows.component.html',
  styleUrls: ['./list-pay-windows.component.css']
})
export class ListPayWindowsComponent implements OnInit {
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
    this.router.navigate(['windows/pay/update'], this.navigatonExtras);

  }

  onGoToDelete(item: any){}

  onGoToNew(){
    this.navigatonExtras.state = {value: null};
    this.router.navigate(['windows/pay/new']);
  }

}
