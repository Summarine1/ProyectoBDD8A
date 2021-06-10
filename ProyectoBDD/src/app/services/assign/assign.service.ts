import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assign } from 'src/app/shared/models/assign.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssignService {

  private listAssigns$: Observable<Assign[]> = new Observable();
  constructor(private http: HttpClient) {

  }

  getAll(osDb: string): Observable<Assign[]> {
    this.listAssigns$ = this.http.get(`http://localhost:3000/${osDb}/assign/all`)
      .pipe(
        map(
          (data) => {
            return data as Assign[];
          }
        ));
    return this.listAssigns$;
  }

  addValues(osDb: string, assign: Assign): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.post(`http://localhost:3000/${osDb}/assign/new`, {asg: assign}, {
      headers: httpHeaders,
      observe: 'response'
    });
    return response;
  }

  deleteValue(osDb: string, assign: Assign): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.request('delete',`http://localhost:3000/${osDb}/assign/delete`, {
      headers: httpHeaders,
      body: {asg: assign}
    });
    return response;
  }

  updateValue(osDb: string, assign: Assign): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.put(`http://localhost:3000/${osDb}/assign/update`, {asg: assign}, {
      headers: httpHeaders
    });
    return response;
  }

}
