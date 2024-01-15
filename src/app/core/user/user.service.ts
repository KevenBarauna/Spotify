import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserInterface } from './user.interface';
import { userDefault } from 'src/app/shared/mocks/user.mock';

const KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {
    const userStorage = this.getUserStorage();
    userStorage && this.setUser(userStorage);
  }

  private userSubject = new BehaviorSubject<UserInterface>(userDefault);

  private setUserStorage(user: UserInterface): void {
    localStorage.setItem(KEY, JSON.stringify(user));
  }

  private getUserStorage(): UserInterface {
    const userStorage = localStorage.getItem('user') || '';
    if (userStorage) {
      const userJson = JSON.parse(userStorage);
      const user: UserInterface = {
        email: userJson?.email,
        nameProfile: userJson?.nameProfile,
        dateBirth: userJson?.dateBirth,
        gender: userJson?.gender,
      };
      return user
    } else {
      const user: UserInterface = {
        email: '',
        nameProfile: '',
        dateBirth: '',
        gender: '',
      };
      return user;
    }
  }

  getUser(): Observable<UserInterface> {
    return this.userSubject.asObservable();
  }

  setUser(user: UserInterface): void {
    this.userSubject.next(user);
    this.setUserStorage(user);
  }

  removerUser(): void{
    localStorage.removeItem(KEY);
  }

  isLogged(): boolean{
    if(this.getUserStorage()?.email){
      return true
    }
    return false
  }

}
