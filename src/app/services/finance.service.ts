import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http: HttpClient, private utils: UtilsService) { }

  getFinances(): Observable<any[]>{
    return this.http
    .get<any[]>('https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/wedding_favorites')
    .pipe(retry(1), catchError(this.utils.handleError));
  }
}
