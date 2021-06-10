import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { Payment } from 'src/app/shared/models/payment.interface';

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

  payments: Observable<Payment []>;

  constructor(
    private router: Router,
    private pay: PaymentService,
    private toastr: ToastrService
    ) {
    this.payments = this.pay.getAll('windows');
  }

  ngOnInit(): void {
  }

  onGoToEdit(item: any){
    this.navigatonExtras.state = { value: item, osDb: 'windows'};
    this.router.navigate(['windows/pay/update'], this.navigatonExtras);

  }

  onGoToDelete(item: any){
    const response = this.pay.deleteValue('windows', item);
    const sub = response.subscribe((data) => {
      this.payments = this.pay.getAll('windows');
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
    this.navigatonExtras.state = {osDb: 'windows'};
    this.router.navigate(['windows/pay/new'], this.navigatonExtras);
  }

}
