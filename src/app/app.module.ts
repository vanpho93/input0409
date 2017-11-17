import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WordFormComponent } from './word-form.component';
import { WordComponent } from './word.component';
import { ChildComponent } from './interaction/child.component';
import { ParentComponent } from './interaction/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ChildComponent,
    ParentComponent,
    WordFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
