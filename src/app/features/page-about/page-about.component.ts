import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/authentication/auth.service';


@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.css'],
})
export class PageAboutComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }



}
