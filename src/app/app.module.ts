import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {RoutingModule} from './routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
