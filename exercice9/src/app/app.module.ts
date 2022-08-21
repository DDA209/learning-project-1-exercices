import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card/card.component';
import { TableComponent } from './components/table/table/table.component';
import { LineComponent } from './components/table/line/line.component';
import { ColumnComponent } from './components/table/column/column.component';
import { CarService } from './service/car.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TableComponent,
    LineComponent,
    ColumnComponent,
  ],
  imports: [BrowserModule],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
