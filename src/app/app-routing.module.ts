import {NgModule} from "@angular/core";
import {RouterModule,Routes} from "@angular/router";
import {Errore404Component} from "./componenti/errore404/errore404.component";
import {HomepageComponent} from "./componenti/homepage/homepage.component";

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"/homepage"},
  {path:"homepage",component:HomepageComponent},
  {path:"404",component:Errore404Component},
  {path:"**",redirectTo:"/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
