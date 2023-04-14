import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoginComponent } from './page-login.component';
import { InputTextModule } from 'src/app/shared/components/input-text/input-text.module';
// import { InputTextComponent } from 'src/app/shared/components/input-text/input-text.component';


@NgModule({
  imports: [ CommonModule, InputTextModule ],
  declarations: [ PageLoginComponent ],
  exports: [ PageLoginComponent ],
})
export class PageLoginModule { }
