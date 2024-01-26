import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from './ui/progress-bar/progress-bar.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, ProgressBarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
