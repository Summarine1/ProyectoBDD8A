import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/shared/models/payment.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  private listPayments$: Observable<Payment []> = new Observable();
  constructor(private http: HttpClient) { }
  getAll(osDB: string): Observable<Payment []>{
    this.listPayments$ = this.http.get(`http://localhost:3000/${osDB}/payment/all`)
    .pipe(
      map((data) => {
        return data as Payment[];
      })
    );
    return this.listPayments$;
  }

  addValue(osDb: string, payment: Payment){
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.post(`http://localhost:3000/${osDb}/payment/new`, {pay: payment}, {
      headers: httpHeaders,
      observe: 'response'
    });
    return response;
  }

  deleteValue(osDb: string, payment: Payment): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.request('delete',`http://localhost:3000/${osDb}/payment/delete`, {
      headers: httpHeaders,
      body: {pay: payment}
    });
    return response;
  }

  updateValue(osDb: string, payment: Payment): Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-control': 'no-cache'
    })
    const response = this.http.put(`http://localhost:3000/${osDb}/payment/update`, {pay: payment}, {
      headers: httpHeaders
    });
    return response;
  }

}
