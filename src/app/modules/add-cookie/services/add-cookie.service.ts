import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    withCredentials: boolean,
    noCors=false
  ): Observable<AddCookieResponse> {
    const url = noCors?'https://spring.company.cat/set-cookie-no-cors':'https://spring.company.cat/set-cookie';
    if (withCredentials)
      return this.http.post<AddCookieResponse>(
        url,
        { name: name, value: value },
        { withCredentials: true }
      );
    else
      return this.http.post<AddCookieResponse>(
        url,
        { name: name, value: value }
      );
  }

  public AddCookieGet(
    name: string,
    value: string,
    withCredentials: boolean
  ): Observable<AddCookieResponse> {
    const params=new HttpParams()
      .set('name',name)
      .set('value',value);
    if (withCredentials)
      return this.http.get<AddCookieResponse>(
        'https://spring.company.cat/set-cookie',
        { withCredentials: true, params: params}
      );
    else
      return this.http.get<AddCookieResponse>(
        'https://spring.company.cat/set-cookie',
        { params: params }
      );
  }
}
