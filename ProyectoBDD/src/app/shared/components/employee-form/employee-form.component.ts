import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/employees.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})

export class EmployeeFormComponent implements OnInit {

  employeeForm: FormGroup;
  employee: Employee;

  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.employeeForm = this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
      this.router.navigate(['windows/emp/new']);
    }else{
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSave(): void{
    console.log('Guardado', this.employeeForm.value);
    if(this.employeeForm.valid){
      const employee = this.employeeForm.value;
      const employeeId = this.employee?.eno || null;
      //Falta la función para guardar
    }
  }
  
  private initForm(): FormGroup{
    return this.fb.group({
      ename: ['', [ Validators.required ]],
      title: ['', [ Validators.required ]],
    });
  }

}
