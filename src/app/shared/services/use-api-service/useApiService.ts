import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface GetModelsRequestProps {
  key: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  getModels(params: GetModelsRequestProps): Observable<any> {
    return this.http.post(`/api/models`, params, { headers: this.headers }).pipe(
      map((response: any) => {
        return response;
      }),
    );
  }
}