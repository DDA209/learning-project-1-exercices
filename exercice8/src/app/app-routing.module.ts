import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: '404', component: ErrorViewComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
