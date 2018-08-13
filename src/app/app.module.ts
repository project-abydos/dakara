import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TextEntryComponent } from './text-entry/text-entry.component';
import { TextListComponent } from './text-list/text-list.component';
import { ActionBarComponent } from './action-bar/action-bar.component';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { TextLookupComponent } from './text-lookup/text-lookup.component';
library.add(fas, fab);

@NgModule({
  declarations: [
    AppComponent,
    TextEntryComponent,
    TextListComponent,
    ActionBarComponent,
    TextLookupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
