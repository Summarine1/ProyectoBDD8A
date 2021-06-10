import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/models/employees.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private listEmployees$: Observable<Employee []> = new Observable();

  constructor(private http: HttpClient) {
  }

  getAll(osDB: string): Observable<Employee[]>{
    this.listEmployees$ = this.http.get(`http://localhost:3000/${osDB}/employee/all`)
    .pipe(
      map((data) => {
      return data as Employee[];
    }));
    return this.listEmployees$;
  }

  searchValue(osDb: string, resp: string): Observable<Employee []>{
	this.listEmployees$ = this.http.get(`http://localhost:3000/${osDb}/employee/all?name=${resp}`)
	.pipe(
		map((data) => {
			return data as Employee[];
		}));
	return this.listEmployees$;
  }
  addValue(osDb: string, employee: Employee){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.post(`http://localhost:3000/${osDb}/employee/new`, {emp: employee}, {
      headers: httpHeaders,
      observe: 'response'
    });
    return response;
  }

  deleteValue(osDb: string, employee: Employee): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.request('delete',`http://localhost:3000/${osDb}/employee/delete`, {
      headers: httpHeaders,
      body: {emp: employee}
    });
    return response;
  }

  updateValue(osDb: string, employee: Employee): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.put(`http://localhost:3000/${osDb}/employee/update`, {emp: employee}, {
      headers: httpHeaders
    });
    return response;
  }

}
