import {Component,OnInit} from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})

export class HomepageComponent implements OnInit {
  constructor(){
    focus();
    addEventListener("keydown",(event:KeyboardEvent) => {
      const carattere:string = event.key.toUpperCase();
      console.log("Hai premuto il tasto " + carattere);
    });
  }

  ngOnInit():void{}
}
