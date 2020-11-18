import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http: HttpClient, private utils: UtilsService) { }

  getInvoices(): Observable<any[]>{
    return this.http
    .get<any[]>('https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/invoice')
    .pipe(retry(1), catchError(this.utils.handleError));
  }
}
