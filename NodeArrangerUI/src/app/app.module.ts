import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextNodeComponent } from './text-node/text-node.component';
import { TextNodeBoxComponent } from './text-node-box/text-node-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TextNodeComponent,
    TextNodeBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    TextNodeComponent,
    TextNodeBoxComponent
  ]
})
export class AppModule { }
