import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AssignService } from 'src/app/services/assign/assign.service';
import { Assign } from 'src/app/shared/models/assign.interface';

@Component({
  selector: 'app-list-asg-windows',
  templateUrl: './list-asg-windows.component.html',
  styleUrls: ['./list-asg-windows.component.css']
})
export class ListAsgWindowsComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
      db: 'windows'
    }
  }
  listAssigns: Observable<Assign []>;
  constructor(private router: Router, private asg: AssignService, private toastr: ToastrService) {
    this.listAssigns = this.asg.getAll('windows');
  }

  ngOnInit(): void {
    const sub = this.listAssigns.subscribe((data) => {
      this.toastr.success("Assignments loaded", "Loading Complete");
      sub.unsubscribe();
    },
    (error) => {
      this.toastr.error(error.error.error, "Assignment loading error");
    });
  }

  onGoToSearch(value: string){
	this.listAssigns = this.asg.searchValue('windows', value);
	const sub = this.listAssigns.subscribe((data) => {
	  sub.unsubscribe();
	}, (error) => {
		this.toastr.error(error.error.error, "Assignment loading error");
	});
  }

  onGoToEdit(item: any): void{
    const asg = {...item, lastEno: item.eno, lastPno: item.pno};
    this.navigationExtras.state = {value: asg, osDb: 'windows'};
    this.router.navigate(['windows/asg/update'], this.navigationExtras);
  }

  onGoToDelete(item: any){
    const response = this.asg.deleteValue('windows', item);
    const sub = response.subscribe((data) => {
      this.listAssigns = this.asg.getAll('windows');
      const subDel = this.listAssigns.subscribe((data) => {
        subDel.unsubscribe();
      },
       (error) => {
        this.toastr.error(error.error.error, "Assignment delete error");
      });
      this.toastr.warning("Assign field removed", "Assign removed");
      sub.unsubscribe();
    }, (error) => {
      this.toastr.error(error.error.error, "Assignment delete error");
    });
  }

  onGoToNew(){
    this.navigationExtras.state = {osDb: 'windows'};
    this.router.navigate(['windows/asg/new'], this.navigationExtras);
  }
}
