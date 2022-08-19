import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { LineComponent } from './components/line/line.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, TableComponent, LineComponent, HomeComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
