import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmployeesService } from 'src/app/services/employees/employees.service';
import { Employee } from 'src/app/shared/models/employees.interface';

@Component({
  selector: 'app-list-emp-windows',
  templateUrl: './list-emp-windows.component.html',
  styleUrls: ['./list-emp-windows.component.css']
})
export class ListEmpWindowsComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  list: Observable<Employee[]>;

  constructor(
    private router: Router,
    private emp: EmployeesService,
    private toastr: ToastrService
    ) {
    this.list = this.emp.getAll('windows');
  }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state = { value: item, osDb: 'windows' };
    this.router.navigate(['windows/emp/update'], this.navigationExtras);
  }

  onGoToDelete(item: any): void {
    const response = this.emp.deleteValue('windows', item);
    const sub = response.subscribe((data) => {
      this.list = this.emp.getAll('windows');
      const subDel = this.list.subscribe((data) => {
        subDel.unsubscribe();
      },
        (error) => {
          this.toastr.error(error.error.error, "Employee delete error");
        });
      this.toastr.warning("Employee field removed", "Employee removed");
      sub.unsubscribe();
    }, (error) => {
      this.toastr.error(error.error.error, "Employee delete error");
    });
  }
  onGoToNew(): void {
    this.navigationExtras.state = { osDb: 'windows' };
    this.router.navigate(['windows/emp/new'], this.navigationExtras);
  }

}