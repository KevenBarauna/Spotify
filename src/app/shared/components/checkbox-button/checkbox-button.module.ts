import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckBoxComponent } from './checkbox-button.component';


@NgModule({
  imports: [ CommonModule ],
  declarations: [ CheckBoxComponent ],
  exports: [ CheckBoxComponent ],
})
export class CheckBoxButtonModule { }
