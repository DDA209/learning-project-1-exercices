import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { RowItemComponent } from './components/row-item/row-item.component';
import { ColItemComponent } from './components/col-item/col-item.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    GridViewComponent,
    RowItemComponent,
    ColItemComponent,
    CardComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
