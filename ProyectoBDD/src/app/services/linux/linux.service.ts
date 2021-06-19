import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LinuxService {

	constructor(private http: HttpClient) { }

	getMechEng(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/mecheng')
		.pipe(map(x => x as Number));
		return response;
	}

	getElectEng(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/electeng')
		.pipe(map(x => x as Number));
		return response;
	}

	getSystemAnal(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/systemanal')
		.pipe(map(x => x as Number));
		return response;
	}

	getMostPayed(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/mostpayed')
		.pipe(map(x => x as Number));
		return response;
	}

	getLessPayed(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/lesspayed')
		.pipe(map(x => x as Number));
		return response;
	}

	getMiddlePayed(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/middlepayed')
		.pipe(map(x => x as Number));
		return response;
	}

}
