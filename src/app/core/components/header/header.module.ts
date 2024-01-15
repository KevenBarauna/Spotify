import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header.component';
import { routerPipe } from 'src/app/shared/pipes/router.pipe';



@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  declarations: [ HeaderComponent, routerPipe ],
  exports: [ HeaderComponent ],
})
export class HeaderModule { }
