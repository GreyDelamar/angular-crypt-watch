import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';

import { HeaderComponent } from './shared';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    rootRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
