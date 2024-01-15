import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PagePlayListComponent } from './page-playlist.component';
import { AudioModule } from './../../core/components/audio/audio.module'

@NgModule({
  imports: [ CommonModule, AudioModule ],
  declarations: [ PagePlayListComponent ],
  exports: [ PagePlayListComponent ],
})
export class PagePlayListModule { }
