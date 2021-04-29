import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HerosModule} from './heros/heros.module';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {DataService} from './service/data.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HerosModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
