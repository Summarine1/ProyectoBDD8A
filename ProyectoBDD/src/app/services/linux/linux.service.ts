import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class LinuxService {

	constructor(private http: HttpClient) { }

	getPays(): Observable<Number []> {
		const response = this.http.get('http://localhost:3000/linux/getallpays')
		.pipe(map(x => x as Number[]));
		return response;
	}

	getTitles(): Observable<any []> {
		const response = this.http.get('http://localhost:3000/linux/gettitles')
		.pipe(map(x => x as any[]));
		return response;
	}

}
