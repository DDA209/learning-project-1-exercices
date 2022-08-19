import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table/table.component';
import { LineComponent } from './components/table/line/line.component';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [AppComponent, TableComponent, LineComponent],
  imports: [BrowserModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
