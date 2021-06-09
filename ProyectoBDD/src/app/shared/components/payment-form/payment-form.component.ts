import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payment } from '../../models/payment.interface';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  paymentForm: FormGroup;
  payment: Payment

  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.payment = navigation?.extras?.state?.value;
    this.paymentForm = this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.payment === 'undefined'){
      this.router.navigate(['windows/pay/new']);
    }else{
      this.paymentForm.patchValue({title: this.payment.title, salary: this.payment.salary});
    }
  }

  onSave(): void{
    console.log('Guardado', this.paymentForm.value);
    if(this.paymentForm.valid){
      const  payment = this.paymentForm.value;
      const paymentObj = this.payment;
      //Falta la función para guardar
    }
  }
  
  private initForm(): FormGroup{
    return this.fb.group({
      title: ['', [ Validators.required ]],
      salary: [0, [ Validators.required ]],
    });
  }
}