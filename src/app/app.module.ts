import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    BrowserAnimationsModule,

    DashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
