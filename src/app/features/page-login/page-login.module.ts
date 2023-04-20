import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageLoginComponent } from './page-login.component';
import { InputTextModule } from 'src/app/shared/components/input-text/input-text.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { CheckBoxButtonModule } from 'src/app/shared/components/checkbox-button/checkbox-button.module';
import { RadioButtonModule } from 'src/app/shared/components/radio-button/radio-button.module';


@NgModule({
  imports: [ CommonModule, InputTextModule, ButtonModule, CheckBoxButtonModule, RadioButtonModule, ReactiveFormsModule ],
  declarations: [ PageLoginComponent ],
  exports: [ PageLoginComponent ],
})
export class PageLoginModule { }
