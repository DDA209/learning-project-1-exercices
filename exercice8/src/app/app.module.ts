import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table/table.component';
import { LineComponent } from './components/table/line/line.component';
import { ProductService } from './services/product.service';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/gards/auth-guard.service';
import { ProductViewComponent } from './views/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LineComponent,
    HeaderComponent,
    ErrorViewComponent,
    HomeViewComponent,
    LoginViewComponent,
    ProductViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProductService, AuthService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
