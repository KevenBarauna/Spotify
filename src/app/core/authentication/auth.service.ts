import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFormInterface, UserInterface } from '../user/user.interface';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient, private userService: UserService) { }

  clientId: string = '2a67326fa1d140b79866e5412252967a';
  authEndpoint: string = 'https://accounts.spotify.com/authorize';
  redirectUrl: string = 'http://localhost:4200/login/';
  scopes: string[] = [
    'user-read-currently-playing', // música tocando agora.
    'user-read-recently-played', // ler música tocadas recentemente
    'user-read-playback-state', // ler estado do player do usuário
    'user-top-read', // top artistas e música do usuário
    'user-modify-playback-state', // alterar do player do usuário.
    'user-library-read', // ler biblioteca dos usuários
    'playlist-read-private', // ler playlists privadas
    'playlist-read-collaborative' // ler playlists colaborativas
  ];

  private getUrlLogin(): string {
    const requestAuthEndpoint = `${this.authEndpoint}?`;
    const requestClientId = `client_id=${this.clientId}&`;
    const requestRedirectUrl = `redirect_uri=${this.redirectUrl}&`;
    const requestScopes = `scope=${this.scopes.join('%20')}&`
    const requestResponseType = `response_type=token&show_dialog=true`;
    return requestAuthEndpoint + requestClientId + requestRedirectUrl + requestScopes + requestResponseType;
  };

  redirectLogin(userForm?: UserFormInterface): void {
    if (userForm) {
      const user: UserInterface = {
        email: userForm.email,
        nameProfile: userForm.nameProfile,
        dateBirth: userForm.dateBirth,
        gender: userForm.gender,
      };
      this.userService.setUser(user);
    }
    window.location.href = this.getUrlLogin();
  };

  getTokenUrlCallback(): string {
    if (!window.location.hash) return ''
    const paramsUrl = window.location.hash.substring(1).split('&');
    return paramsUrl[0].split('=')[1];
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  private removeToken(): void {
    localStorage.removeItem('token');
  }

  getRequest(urlRequest: string) {
    const token = this.getToken();
    const url = `https://api.spotify.com/v1/${urlRequest}`

    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    })

    return this._http.get<any>(url, { headers: reqHeader })
  }

  logout(): void {
    this.removeToken()
    this.userService.removerUser();
  }

}

