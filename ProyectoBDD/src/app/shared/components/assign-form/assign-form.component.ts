import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AssignService } from 'src/app/services/assign/assign.service';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { ProjectService } from 'src/app/services/project/project.service';
import { Assign } from '../../models/assign.interface';
import { Employee } from '../../models/employees.interface';
import { Project } from '../../models/projects.interface';

@Component({
  selector: 'app-assign-form',
  templateUrl: './assign-form.component.html',
  styleUrls: ['./assign-form.component.css']
})

export class AssignFormComponent implements OnInit {

  db: string;
  assignForm: FormGroup;
  assign: Assign;

  projects: Observable<Project[]>;
  employees: Observable<Employee[]>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private emp: EmployeesService,
    private proj: ProjectService,
    private asg: AssignService,
    private toastr: ToastrService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.assign = navigation?.extras?.state?.value;
    this.db = navigation?.extras?.state?.osDb;
    this.assignForm = this.initiForm();
    this.projects = this.proj.getAll(`${this.db}`);
    this.employees = this.emp.getAll(`${this.db}`);
  }

  ngOnInit(): void {
    if (typeof this.assign === 'undefined') {
      this.router.navigate([`${this.db}/asg/new`]);
    } else {
      this.assignForm.patchValue({
        eno: this.assign.eno,
        pno: this.assign.pno,
        resp: this.assign.resp,
        dur: this.assign.dur
      });
    }
  }

  onGoBackToList() {
    this.router.navigate([`${this.db}/asg`]);
  }

  onSave(): void {
    // console.log('Saved', this.assignForm.value);
    if (this.assignForm.valid) {
      const assign = this.assignForm.value;
      const assignEno = this.assign?.lastEno || null;
      const assignPno = this.assign?.lastPno || null;
      //Falta función para guardar

      if (assignEno === null && assignPno === null) {
        const response = this.asg.addValues(this.db, { ...assign, lastEno: null, lastPno: null });
        const sub = response.subscribe((data) => {
          this.toastr.success("Assing created in the table", "Assignment Added");
          this.onGoBackToList();
          sub.unsubscribe();
        }, (error) => {
          this.toastr.error(error.error.error, "Assignment add error");
        })
      }
      else {
        const response = this.asg.updateValue(this.db, { ...assign, lastEno: assignEno, lastPno: assignPno });
        const sub = response.subscribe((data) => {
          this.toastr.success("Assignment Update", "Assing updated in table");
          this.onGoBackToList();
          sub.unsubscribe();
        }, (error) => {
          this.toastr.error(error.error.error, "Assignment update error");
        })
      }

    }
  }

  private initiForm(): FormGroup {
    return this.fb.group({
      eno: ['', [Validators.required]],
      pno: ['', [Validators.required]],
      resp: ['', [Validators.required]],
      dur: [0, [Validators.required]]
    });
  }

}
