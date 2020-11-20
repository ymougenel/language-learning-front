import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {AppRoutingModule} from "./app-routing.module";
import { TranslationsFormComponent } from './components/quizz/translations-form.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/commun/header/header.component';
import { TranslationsListComponent } from './components/translations-list/translations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslationsFormComponent,
    HeaderComponent,
    TranslationsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
