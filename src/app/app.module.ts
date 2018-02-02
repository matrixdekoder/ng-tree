import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeModule } from '../ng-tree/tree-module';


import { AppComponent } from './app.component';
import { TreeFilterDemoComponent } from './tree-filter-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeFilterDemoComponent
  ],
  imports: [
    BrowserModule,
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
