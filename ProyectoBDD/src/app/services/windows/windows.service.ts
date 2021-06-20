import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WindowsService {

	constructor(private http: HttpClient) { }

	getBudgets(): Observable<Number []> {
		const response = this.http.get('http://localhost:3000/windows/budgets')
		.pipe((map( x => x as Number [])))
		return response;
	}

	getDurations(): Observable<Number []> {
		const response = this.http.get('http://localhost:3000/windows/durations')
		.pipe((map( x => x as Number[])))
		return response;
	}

}
