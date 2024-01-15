import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioButtonComponent } from './radio-button.component';
import { MessageErrorModule } from '../message-error/message-error.module';


@NgModule({
  imports: [ CommonModule, MessageErrorModule ],
  declarations: [ RadioButtonComponent ],
  exports: [ RadioButtonComponent ],
})
export class RadioButtonModule { }
