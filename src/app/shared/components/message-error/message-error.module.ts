import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageErrorComponent } from './message-error.component';


@NgModule({
  imports: [ CommonModule ],
  declarations: [ MessageErrorComponent ],
  exports: [ MessageErrorComponent ],
})
export class MessageErrorModule { }
