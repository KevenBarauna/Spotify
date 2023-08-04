import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/authentication/auth.service';
import { UserFormInterface } from 'src/app/core/user/user.interface';
import { enumMessage } from 'src/app/shared/enums/message.enum';
import { getMessageValidate } from 'src/app/shared/utils/validate';
import { enumRoutes } from 'src/app/shared/enums/routes.enum';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(2), Validators.maxLength(30)]),
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      nameProfile: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      birthDay: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      birthMonth: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      birthYear: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
      gender: new FormControl('', [Validators.required]),
      isMessageMarketing: new FormControl('', [Validators.required]),
      isShareData: new FormControl('', [Validators.required]),
      isTermsConditions: new FormControl('', [Validators.required]),
    })

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

  getMessageErrorInput(nameInput: string) {
    const message = getMessageValidate(this.loginForm.get(nameInput));
    console.log(`Mensagem Validação - ${nameInput}: `, message)
    return message;
  }


  redirectHome(): void {
    this.router.navigateByUrl(enumRoutes.HOME);
    this.loginForm.reset()
  }

  submitLoginForm(): void {
    console.log('ENVIAR: ', this.loginForm)
    // const genero = Array.from(document.getElementsByName('gender')).find(x => x?.checked === true)?.value;
    // console.log('Gere', )
    if (this.loginForm.invalid) return;

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
    this.loginForm.reset()
  }
}
