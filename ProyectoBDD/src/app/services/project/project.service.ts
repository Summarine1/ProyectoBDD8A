import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/shared/models/projects.interface';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private listProjects$: Observable<Project []> = new Observable();
  constructor(private http: HttpClient) { }

  getAll(osDb: string): Observable<Project[]>{
    this.listProjects$ = this.http.get(`http://localhost:3000/${osDb}/project/all`)
    .pipe(
      map((data) => {
        return data as Project[];
      })
    );
    return this.listProjects$;
  }

  addValue(osDb: string, project: Project){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.post(`http://localhost:3000/${osDb}/project/new`, {proj: project}, {
      headers: httpHeaders,
      observe: 'response'
    });
    return response;
  }

  deleteValue(osDb: string, project: Project): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.request('delete',`http://localhost:3000/${osDb}/project/delete`, {
      headers: httpHeaders,
      body: {proj: project}
    });
    return response;
  }

  updateValue(osDb: string, project: Project): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.put(`http://localhost:3000/${osDb}/project/update`, {proj: project}, {
      headers: httpHeaders
    });
    return response;
  }

}
