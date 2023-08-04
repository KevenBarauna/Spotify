import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBoxComponent } from './checkbox-button.component';
import { MessageErrorModule } from '../message-error/message-error.module';


@NgModule({
  imports: [ CommonModule, MessageErrorModule ],
  declarations: [ CheckBoxComponent ],
  exports: [ CheckBoxComponent ],
})
export class CheckBoxButtonModule { }
