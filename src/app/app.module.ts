import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FinanEXPComponentsModule } from 'finan-exp-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FinanEXPComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
