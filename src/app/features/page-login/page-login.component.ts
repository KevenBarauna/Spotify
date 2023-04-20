import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { UserFormInterface } from 'src/app/core/user/user.interface';
import { enumMessage } from 'src/app/shared/enums/message.enum';
import { enumRoutes } from 'src/app/shared/enums/routes.enum';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {

  messageErrorRequired: string = enumMessage.INPUT_IS_REQUIRED;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nameProfile: ['', Validators.required],
    });

    const tokenUrl = this.authService.getTokenUrlCallback();
    const tokenStorage = this.authService.getToken();
    if (tokenUrl) {
      this.authService.setToken(tokenUrl);
      this.redirectHome();
    }
    if (tokenStorage) {
      this.redirectHome()
    }
  }

  redirectHome(): void{
    this.router.navigateByUrl(enumRoutes.HOME);
    this.loginForm.reset()
  }

  redirectLogin(): void {
    const formData: UserFormInterface = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
      nameProfile: this.loginForm.get('nameProfile')?.value,
      dateBirth: this.loginForm.get('dateBirth')?.value,
      gender: this.loginForm.get('gender')?.value,
      isMessageMarketing: this.loginForm.get('isMessageMarketing')?.value,
      isSharePersonalData: this.loginForm.get('isSharePersonalData')?.value,
      isAgreeTerms: this.loginForm.get('isAgreeTerms')?.value,
    }
    this.authService.redirectLogin(formData);
  }
}
