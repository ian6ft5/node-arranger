import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { TextNode } from './models/textnode';

@Injectable({
  providedIn: 'root'
})
export class TextNodeService {

  constructor(private http: HttpClient) { }

  getNodes(): Observable<TextNode[]> {
    return this.http.get<TextNode[]>('../api/nodes.json').pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
