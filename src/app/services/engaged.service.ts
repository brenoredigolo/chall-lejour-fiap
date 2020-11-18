import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class EngagedService {

  constructor(private http: HttpClient, private utils: UtilsService) { }

  getEngaged(): Observable<any[]>{
    return this.http
    .get<any[]>('https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/appointment')
    .pipe(retry(1), catchError(this.utils.handleError));
  }
}
