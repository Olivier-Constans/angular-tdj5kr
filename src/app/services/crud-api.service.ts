import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class CrudApiService<T> {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private url: string, private http: HttpClient) {}

  get(): Observable<T[]> {
    return this.http
      .get<T[]>(this.url)
      .pipe(tap((_) => console.log('fetched')));
  }
}
