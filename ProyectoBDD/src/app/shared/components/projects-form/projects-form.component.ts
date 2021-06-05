import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Project } from '../../models/projects.interface';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnInit {

  projectForm: FormGroup;
  project: Project

  constructor(private fb: FormBuilder, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.project = navigation?.extras?.state?.value;
    this.projectForm = this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.project === 'undefined'){
      this.router.navigate(['windows/proj/new']);
    }else{
      this.projectForm.patchValue(this.project);
    }
  }

  onSave(): void{
    console.log('Guardado', this.projectForm.value);
    if(this.projectForm.valid){
      const project = this.projectForm.value;
      const projectId = this.project?.pno || null;
      //Falta la función para guardar
    }
  }
  
  private initForm(): FormGroup{
    return this.fb.group({
      pname: ['', [ Validators.required ]],
      budget: [0, [ Validators.required ]],
    });
  }

}
