import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { AuthGuardService } from './services/gards/auth-guard.service';
import { ProductViewComponent } from './views/product-view/product-view.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: HomeViewComponent,
  },
  {
    path: 'product/:id',
    canActivate: [AuthGuardService],
    component: ProductViewComponent,
  },
  // {
  //   path: '/admin',
  //   canActivate: [AuthGuardService, AdminGuardService],
  //   component: AdminViewComponent,
  // },
  { path: 'login', component: LoginViewComponent },
  { path: '404', component: ErrorViewComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
