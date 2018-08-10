import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TextEntryComponent } from './text-entry/text-entry.component';
import { TextListComponent } from './text-list/text-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEntryComponent,
    TextListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
