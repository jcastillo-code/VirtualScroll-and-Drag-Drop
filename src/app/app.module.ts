import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Imports Tools */
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { VirtualComponent } from './Components/virtual/virtual.component';
import { DragComponent } from './Components/drag/drag.component';
import { CountryComponent } from './Components/country/country.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
