import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit{
  cookies:string = document.cookie;
  
  ngOnInit(): void {
    document.cookie="anotherCookie=anotherCookieValue;Domain=company.cat;Path=/;SameSite=None;Secure=true;HttpOnly=true;Max-Age=3600;"
  }

}
