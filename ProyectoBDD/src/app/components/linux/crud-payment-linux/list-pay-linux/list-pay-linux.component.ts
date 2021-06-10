import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { Payment } from 'src/app/shared/models/payment.interface';

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

  payments: Observable<Payment []>;

  constructor(
    private router: Router,
    private pay: PaymentService,
    private toastr: ToastrService
    ) {
    this.payments = this.pay.getAll('linux');
  }

  ngOnInit(): void {
  }

  onGoToEdit(item: any){
    this.navigatonExtras.state = { value: item, osDb: 'linux'};
    this.router.navigate(['linux/pay/update'], this.navigatonExtras);

  }

  onGoToSearch(value: string){
	this.payments = this.pay.searchValue('linux', value);
	const sub = this.payments.subscribe((data) => {
	  sub.unsubscribe();
	}, (error) => {
		this.toastr.error(error.error.error, "Assignment loading error");
	});
  }

  onGoToDelete(item: any){
    const response = this.pay.deleteValue('linux', item);
    const sub = response.subscribe((data) => {
      this.payments = this.pay.getAll('linux');
      const subDel = this.payments.subscribe((data) => {
        subDel.unsubscribe();
      },
       (error) => {
        this.toastr.error(error.error.error, "Payment delete error");
      });
      this.toastr.warning("Payment field removed", "Payment removed");
      sub.unsubscribe();
    }, (error) => {
      this.toastr.error(error.error.error, "Payment delete error");
    });
  }

  onGoToNew(){
    this.navigatonExtras.state = {osDb: 'linux'};
    this.router.navigate(['linux/pay/new'], this.navigatonExtras);
  }

}
