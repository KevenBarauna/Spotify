import { Component, OnInit } from '@angular/core';

import { enumMenu } from 'src/app/shared/enums/routes.enum';
import { enumTheme } from 'src/app/shared/enums/theme.enum';
import { RouterInterface } from 'src/app/shared/interfaces/routes.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  routes: RouterInterface[] = []
  themeCurrent: string = 'light'

  ngOnInit(): void {
    this.routes = enumMenu;
  }

  toggleTheme(): void{
    const theme = document.body.classList.toggle('dark-theme');
    this.themeCurrent = theme ? enumTheme.DARK : enumTheme.LIGHT
  };

}
