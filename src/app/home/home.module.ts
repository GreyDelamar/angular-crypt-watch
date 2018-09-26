import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { TableComponent } from './table';


const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent
  }
]);

@NgModule({
  declarations: [
    HomeComponent,
    TableComponent
  ],
  imports: [
    homeRouting,
    BrowserModule
  ],
  providers: []
})
export class HomeModule {}