import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { enumMenu } from 'src/app/shared/enums/routes.enum';
import { enumTheme } from 'src/app/shared/enums/theme.enum';
import { RouterInterface } from 'src/app/shared/interfaces/routes.interface';
import { UserService } from '../../user/user.service';
import { UserInterface } from '../../user/user.interface';
import { AuthService } from '../../authentication/auth.service';
import { enumRoutes } from 'src/app/shared/enums/routes.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<UserInterface>
  user?: UserInterface;
  routes: RouterInterface[] = enumMenu
  themeCurrent: string = 'light'

  constructor(userService: UserService, private authService: AuthService, private router: Router) {
    this.user$ = userService.getUser();
    this.user$.subscribe(x => {this.user = x});
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
