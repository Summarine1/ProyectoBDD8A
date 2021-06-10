import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from '../../models/projects.interface';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnInit {

  projectForm: FormGroup;
  project: Project
  db: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private proj: ProjectService,
    private toastr: ToastrService
    ) {
    const navigation = this.router.getCurrentNavigation();
    this.project = navigation?.extras?.state?.value;
    this.projectForm = this.initForm();
    this.db = navigation?.extras?.state?.osDb;
  }

  ngOnInit(): void {
    if(typeof this.project === 'undefined'){
      this.router.navigate([`${this.db}/proj/new`]);
    }else{
      this.projectForm.patchValue(this.project);
    }
  }

  onGoBackToList(){
    this.router.navigate([`${this.db}/proj`]);
  }

  onSave(): void{
    console.log('Guardado', this.projectForm.value);
    if(this.projectForm.valid){
      const project = this.projectForm.value;
      const projectId = this.project?.pno || null;
      //Falta la función para guardar

      if(projectId === null){
        const response = this.proj.addValue(`${this.db}`, project as Project);
        const sub = response.subscribe((data) => {
          this.toastr.success("Project created in the table", "Project Added")
          this.onGoBackToList();
          sub.unsubscribe();
        }, (error) => {
          this.toastr.error(error.error.error, "Project add error");
        });
      }else{
        const response = this.proj.updateValue(this.db, {...project, pno: projectId} as Project);
        const sub = response.subscribe((data) => {
          this.toastr.success("Project updated in table", "Project Update");
          this.onGoBackToList();
          sub.unsubscribe();
        }, (error) => {
          this.toastr.error(error.error.error, "Project update error");
        })
      }
    }
  }
  
  private initForm(): FormGroup{
    return this.fb.group({
      pname: ['', [ Validators.required ]],
      budget: [0, [ Validators.required ]],
    });
  }

}
