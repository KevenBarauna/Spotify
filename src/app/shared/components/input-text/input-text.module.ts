import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InputTextComponent } from './input-text.component';


@NgModule({
  imports: [ CommonModule, ReactiveFormsModule ],
  declarations: [ InputTextComponent ],
  exports: [ InputTextComponent ],
})
export class InputTextModule { }
