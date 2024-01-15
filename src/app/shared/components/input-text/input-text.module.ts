import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextComponent } from './input-text.component';
import { MessageErrorModule } from '../message-error/message-error.module';


@NgModule({
  imports: [ CommonModule, ReactiveFormsModule, MessageErrorModule ],
  declarations: [ InputTextComponent ],
  exports: [ InputTextComponent ],
})
export class InputTextModule { }
