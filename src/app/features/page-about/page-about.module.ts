import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAboutComponent } from './page-about.component';


@NgModule({
  imports: [ CommonModule ],
  declarations: [ PageAboutComponent ],
  exports: [ PageAboutComponent ],
})
export class PageAboutModule { }
