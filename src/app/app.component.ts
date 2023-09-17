import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'test-cookies-front';
  cookies:string = document.cookie;

  ngOnInit(): void {
    document.cookie="anotherCookie=anotherCookieValue;Domain=company.cat;Path=/;SameSite=None;Secure=true;HttpOnly=true;Max-Age=3600;"
  }
}
