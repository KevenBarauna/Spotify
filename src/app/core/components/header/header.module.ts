import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header.component';


@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
})
export class HeaderModule { }
