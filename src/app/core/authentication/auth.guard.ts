import { Injectable } from "@angular/core";
import { UserService } from "../user/user.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { enumRoutes } from "src/app/shared/enums/routes.enum";

@Injectable({ providedIn: 'root'})
export class AuthGuard {

  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>{
    console.log('Ativou o guarda')
    if(this.userService.isLogged()){
      this.router.navigateByUrl(enumRoutes.HOME)
      return false;
    }
    return true;
  }

}
