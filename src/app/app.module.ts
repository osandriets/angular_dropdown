import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { PrettyDropDownComponent } from './components/pretty-drop-down/pretty-drop-down.component';
import {DropDownDataService} from './services/drop-down-data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PrettyDropDownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClient, DropDownDataService],
  bootstrap: [AppComponent],
  entryComponents: [
    PrettyDropDownComponent
  ]
})
export class AppModule { }
