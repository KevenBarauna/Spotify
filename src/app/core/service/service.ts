import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthService } from '../authentication/auth.service';
import { interceptor } from './interceptor';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private _http: HttpClient, private authService: AuthService) { }

  showMessage(error: any) {
    interceptor(error);
  }

  getServiceQuery(urlRequest: string) {
    const token = this.authService.getToken();
    const url = `https://api.spotify.com/v1/${urlRequest}`

    const reqHeader  = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this._http.get<any>(url, { headers: reqHeader }).pipe(
      tap(
        () => {},
        error => {
          this.showMessage(error);
        }
      )
    );
  }

}

