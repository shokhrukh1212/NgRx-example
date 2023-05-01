import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from "../simple.reducer"

@NgModule({
  imports: [BrowserModule,
  StoreModule.forRoot({ message: simpleReducer})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/