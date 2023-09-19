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

  url = "https://spring.company.cat/file";
  
  ngOnInit(): void {
    document.cookie="another=testing;Domain=company.cat;";
    document.cookie="nodomain=cookie";
  }

}
