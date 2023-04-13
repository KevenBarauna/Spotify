import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageLoginModule } from './features/page-login/page-login.module';
import { PageNotFoundModule } from './features/page-not-found/page-not-found.module';
import { enumRoutes } from 'src/app/shared/enums/routes.enum';
import { PageLoginComponent } from './features/page-login/page-login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: enumRoutes.EMPTY, component: PageLoginComponent },
  { path: enumRoutes.HOME, component: PageLoginComponent },
  { path: enumRoutes.LOGIN, component: PageLoginComponent },
  { path: enumRoutes.ABOUT, component: PageNotFoundComponent },
  { path: enumRoutes.PLAY_LIST, component: PageNotFoundComponent },
  { path: enumRoutes.SONG_PLAY, component: PageNotFoundComponent },
  { path: enumRoutes.NOT_FOUND, component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }