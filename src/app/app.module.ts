import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { ChildComponent } from './interaction/child.component';
import { ParentComponent } from './interaction/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
