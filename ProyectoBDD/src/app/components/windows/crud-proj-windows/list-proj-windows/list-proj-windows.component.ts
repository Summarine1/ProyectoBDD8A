import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/services/project/project.service';
import {Project} from '../../../../shared/models/projects.interface';

@Component({
  selector: 'app-list-proj-windows',
  templateUrl: './list-proj-windows.component.html',
  styleUrls: ['./list-proj-windows.component.css']
})
export class ListProjWindowsComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  projects: Observable<Project []>;

  constructor(
    private router: Router,
    private proj: ProjectService,
    private toastr: ToastrService
    ) {
    this.projects = this.proj.getAll('windows');
  }

  ngOnInit(): void {
  }

  onGoToEdit(item: any){
    this.navigationExtras.state = {value: item, osDb: 'windows'};
    this.router.navigate(['windows/proj/update'], this.navigationExtras);
  }

  onGoToDelete(item: any){
    const response = this.proj.deleteValue('windows', item);
    const sub = response.subscribe((data) => {
      this.projects = this.proj.getAll('windows');
      const subDel = this.projects.subscribe((data) => {
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

  onGoToNew(): void{
    this.navigationExtras.state = {osDb: 'windows'};
    this.router.navigate(['windows/proj/new'], this.navigationExtras);
  }

}