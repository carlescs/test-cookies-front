import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddCookieResponse } from '../models/add-cookie.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddCookieService {
  constructor(private http: HttpClient) {}

  public AddCookie(
    name: string,
    value: string,
    withCredentials: boolean
  ): Observable<AddCookieResponse> {
    if (withCredentials)
      return this.http.post<AddCookieResponse>(
        'https://spring.company.cat/set-cookie',
        { name: name, value: value },
        { withCredentials: true }
      );
    else
      return this.http.post<AddCookieResponse>(
        'https://spring.company.cat/set-cookie',
        { name: name, value: value }
      );
  }
}
