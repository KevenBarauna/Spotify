import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { enumMenu, enumRoutes } from 'src/app/shared/enums/routes.enum';
import { enumTheme } from 'src/app/shared/enums/theme.enum';
import { RouterInterface } from 'src/app/shared/interfaces/routes.interface';
import { UserService } from '../../user/user.service';
import { UserInterface } from '../../user/user.interface';
import { AuthService } from '../../authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user?: UserInterface;
  routes: RouterInterface[] = enumMenu
  themeCurrent: string = 'light'

  constructor(userService: UserService, private authService: AuthService, private router: Router) {
    userService.getUser().subscribe(x => {this.user = x});
  }

  ngOnInit(): void {
    this.routes = enumMenu;
  }

  logout(): void{
    this.authService.logout();
    this.router.navigateByUrl(enumRoutes.LOGIN);
    window.location.reload()
  }

  toggleTheme(): void{
    const theme = document.body.classList.toggle('dark-theme');
    this.themeCurrent = theme ? enumTheme.DARK : enumTheme.LIGHT
  };

}
