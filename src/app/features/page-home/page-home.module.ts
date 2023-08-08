import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageHomeComponent } from './page-home.component';
import { InputTextModule } from 'src/app/shared/components/input-text/input-text.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { CheckBoxButtonModule } from 'src/app/shared/components/checkbox-button/checkbox-button.module';
import { RadioButtonModule } from 'src/app/shared/components/radio-button/radio-button.module';


@NgModule({
  imports: [ CommonModule, InputTextModule, ButtonModule, CheckBoxButtonModule, RadioButtonModule, ReactiveFormsModule ],
  declarations: [ PageHomeComponent ],
  exports: [ PageHomeComponent ],
})
export class PageHomeModule { }
