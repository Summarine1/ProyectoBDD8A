import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ProjectService } from 'src/app/services/project/project.service';
import {Project} from '../../../../shared/models/projects.interface';

@Component({
  selector: 'app-list-proj-linux',
  templateUrl: './list-proj-linux.component.html',
  styleUrls: ['./list-proj-linux.component.css']
})
export class ListProjLinuxComponent implements OnInit {
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
    this.projects = this.proj.getAll('linux');
  }

  ngOnInit(): void {
  }

  onGoToSearch(value: string){
	this.projects = this.proj.searchValue('linux', value);
	const sub = this.projects.subscribe((data) => {
	  sub.unsubscribe();
	}, (error) => {
		this.toastr.error(error.error.error, "Assignment loading error");
	});
  }

  onGoToEdit(item: any){
    this.navigationExtras.state = {value: item, osDb: 'linux'};
    this.router.navigate(['linux/proj/update'], this.navigationExtras);
  }

  onGoToDelete(item: any){
    const response = this.proj.deleteValue('linux', item);
    const sub = response.subscribe((data) => {
      this.projects = this.proj.getAll('linux');
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
    this.navigationExtras.state = {osDb: 'linux'};
    this.router.navigate(['linux/proj/new'], this.navigationExtras);
  }

}
