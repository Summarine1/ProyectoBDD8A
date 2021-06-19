import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class WindowsService {

	constructor(private http: HttpClient) { }

	getHighBudget(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/windows/highbudget')
		.pipe((map( x => x as Number)))
		return response;
	}

	getMiddleBudget(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/windows/medbudget')
		.pipe((map( x => x as Number)))
		return response;
	}

	getLowBudget(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/windows/lowbudget')
		.pipe((map( x => x as Number)))
		return response;
	}

	getMaxDur(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/windows/maxdur')
		.pipe((map( x => x as Number)))
		return response;
	}

	getMedDur(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/windows/meddur')
		.pipe((map( x => x as Number)))
		return response;
	}

	getMinDur(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/windows/mindur')
		.pipe((map( x => x as Number)))
		return response;
	}

}
