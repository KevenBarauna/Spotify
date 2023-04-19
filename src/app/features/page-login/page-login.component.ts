import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { enumMessage } from 'src/app/shared/enums/message.enum';


@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {

  messageErrorRequired: string = enumMessage.INPUT_IS_REQUIRED;

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nameProfile: ['', Validators.required],
    });
  }
}
