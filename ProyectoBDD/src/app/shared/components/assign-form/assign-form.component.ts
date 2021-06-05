import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Assign } from '../../models/assign.interface';

@Component({
  selector: 'app-assign-form',
  templateUrl: './assign-form.component.html',
  styleUrls: ['./assign-form.component.css']
})
export class AssignFormComponent implements OnInit {

  assignForm: FormGroup;
  assign: Assign;
  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.assign = navigation?.extras?.state?.value;
    this.assignForm = this.initiForm();
  }

  ngOnInit(): void {
    if(typeof this.assign === 'undefined'){
      this.router.navigate(['windows/asg/new']);
    }else{
      this.assignForm.patchValue({
        eno: this.assign.eno,
        pno: this.assign.pno,
        resp: this.assign.resp,
        dur: this.assign.dur
      });
    }
  }

  onSave(): void{
    console.log('Saved', this.assignForm.value);
    if(this.assignForm.valid){
      const assign = this.assignForm.value;
      const assignEno = this.assign?.lastEno || null;
      const assignPno = this.assign?.lastPno || null;
      //Falta función para guardar
    }
  }

  private initiForm(): FormGroup{
    return this.fb.group({
      eno: ['', [Validators.required]],
      pno: ['', [Validators.required]],
      resp: ['', [Validators.required]],
      dur: [0, [Validators.required]] 
    });
  }

}
