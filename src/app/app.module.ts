import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderModule } from './core/components/header/header.module';
import { SideMenuModule } from './core/components/side-menu/side-menu.module';
import { ContentPageModule } from './shared/components/content-page/content-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SideMenuModule,
    ContentPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
