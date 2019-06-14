import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from "@angular/common";
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule, MatChipsModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatBadgeModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: window['base-href']
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
