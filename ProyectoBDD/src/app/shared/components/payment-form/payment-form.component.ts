import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { Payment } from '../../models/payment.interface';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  payment: Payment
  db: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pay: PaymentService,
    private toastr: ToastrService
    ) {
    const navigation = this.router.getCurrentNavigation();
    this.payment = navigation?.extras?.state?.value;
    this.paymentForm = this.initForm();
    this.db = navigation?.extras?.state?.osDb;
  }

  ngOnInit(): void {
    if(typeof this.payment === 'undefined'){
      this.router.navigate([`${this.db}/pay/new`]);
    }else{
      this.paymentForm.patchValue(this.payment);
    }
  }

  onSave(): void{
    if(this.paymentForm.valid){
      const  payment = this.paymentForm.value;
      const paymentId = this.payment?.payno || null;
      //Falta la función para guardar

      if(paymentId === null){
        const response = this.pay.addValue(`${this.db}`, payment as Payment);
        const sub = response.subscribe((data) => {
          this.toastr.success("Employee created in the table", "Employee Added")
          this.onGoBackToList();
          sub.unsubscribe();
        }, (error) => {
          this.toastr.error(error.error.error, "Employee add error");
        });
      }else{
        const response = this.pay.updateValue(this.db, {...payment, payno: paymentId} as Payment);
        const sub = response.subscribe((data) => {
          this.toastr.success("Employee updated in table", "Employee Update");
          this.onGoBackToList();
          sub.unsubscribe();
        }, (error) => {
          this.toastr.error(error.error.error, "Employee update error");
        })
      }

    }
  }

  onGoBackToList(){
    this.router.navigate([`${this.db}/pay`]);
  }
  
  private initForm(): FormGroup{
    return this.fb.group({
      title: ['', [ Validators.required ]],
      salary: [0, [ Validators.required ]],
    });
  }
}