import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserMemInDataService } from './user-mem-in-data.service';
const headerOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  usersURL = 'api/users';
  handleError:any="Error occurred";
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.usersURL).pipe(
      catchError(this.handleError)
    );
  }
  postUsers(id:any): Observable<any[]> {
    return this.http.post<any[]>(this.usersURL,id).pipe(
      catchError(this.handleError)
    );
  }
}
