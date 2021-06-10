import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { Employee } from '../../models/employees.interface';
import { Payment } from '../../models/payment.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnInit {

  titles: Observable<Payment []>;
  db: string;
  employeeForm: FormGroup;
  employee: Employee;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private pay: PaymentService,
    private emp: EmployeesService,
    private toastr: ToastrService
    ) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.db = navigation?.extras?.state?.osDb;
    this.employeeForm = this.initForm();
    this.titles = this.pay.getAll(this.db);
  }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
      const extras: NavigationExtras = { state: {value: null, osDb: this.db}};
      this.router.navigate([`${this.db}/emp/new`], extras);
    }else{
      this.employeeForm.patchValue(this.employee);
    }
  }

  onGoBackToList(): void{
    this.router.navigate([`${this.db}/emp`]);
  }

  onSave(): void{
    if(this.employeeForm.valid){
      const employee = this.employeeForm.value;
      const employeeId = this.employee?.eno || null;
      //Falta la función para guardar

      if(employeeId === null){
        const response = this.emp.addValue(`${this.db}`, employee as Employee);
        const sub = response.subscribe((data) => {
          this.toastr.success("Employee created in the table", "Employee Added")
          this.onGoBackToList();
          sub.unsubscribe();
        }, (error) => {
          this.toastr.error(error.error.error, "Employee add error");
        });
      }else{
        const response = this.emp.updateValue(this.db, {...employee, eno: employeeId} as Employee);
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
  
  private initForm(): FormGroup{
    return this.fb.group({
      ename: ['', [ Validators.required ]],
      title: ['', [ Validators.required ]],
    });
  }

}
