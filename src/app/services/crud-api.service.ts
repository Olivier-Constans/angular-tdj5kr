import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NumberId } from '../datas/numberId';

export class CrudApiService<T extends NumberId> {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private url: string, private http: HttpClient) {}

  get(): Observable<T[]> {
    return this.http
      .get<T[]>(this.url)
      .pipe(tap((_) => console.log('fetched')));
  }

  add(data: T): Observable<T> {
    return this.http.post<T>(this.url, data, this.httpOptions).pipe(
      tap((newData: T) =>
        console.log(`${this.url}:  added data w/ id=${newData.id}`)
      ),
      catchError(this.handleError<T>('addHero'))
    );
  }

  delete(id: number): Observable<T> {
    const url = `${this.url}/${id}`;

    return this.http.delete<T>(url, this.httpOptions).pipe(
      tap((_) => console.log(`${this.url}: deleted data id=${id}`)),
      catchError(this.handleError<T>('delete'))
    );
  }

  update(data: T): Observable<any> {
    return this.http.put(this.url, data, this.httpOptions).pipe(
      tap((_) => console.log(`${this.url}: updated datat id=${data.id}`)),
      catchError(this.handleError<any>('update'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
