import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {MainComponent} from "./componenti/main/main.component";
import {HomepageComponent} from "./componenti/homepage/homepage.component";
import {Errore404Component} from "./componenti/errore404/errore404.component";

@NgModule({
  declarations: [
    MainComponent,
    HomepageComponent,
    Errore404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule{}
