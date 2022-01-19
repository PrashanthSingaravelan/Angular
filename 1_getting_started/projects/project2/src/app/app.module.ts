import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularcliComponent } from './angularcli/angularcli.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularcliComponent  // Registered by de-fault
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
