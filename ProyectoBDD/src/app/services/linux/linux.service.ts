import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LinuxService {

	constructor(private http: HttpClient) { }

	//El número de empleados que son ingenieros mecánicos
	getMechEng(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/mecheng')
		.pipe(map(x => x as Number));
		return response;
	}

	//El número de empleados que son ingenieros eléctricos
	getElectEng(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/electeng')
		.pipe(map(x => x as Number));
		return response;
	}

	//El número de empleados que son analistas de sistemas
	getSystemAnal(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/systemanal')
		.pipe(map(x => x as Number));
		return response;
	}

	//El número de empleados que ganan más de 35000
	getMostPayed(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/mostpayed')
		.pipe(map(x => x as Number));
		return response;
	}

	//El número de empleados que ganan menos de 20000
	getLessPayed(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/lesspayed')
		.pipe(map(x => x as Number));
		return response;
	}

	//El número de empleados que ganan entre 20000 y 35000
	getMiddlePayed(): Observable<Number> {
		const response = this.http.get('http://localhost:3000/linux/middlepayed')
		.pipe(map(x => x as Number));
		return response;
	}

}
