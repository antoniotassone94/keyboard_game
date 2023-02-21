import {Component,ElementRef,OnInit,ViewChild} from "@angular/core";

//funzioni che mancano:
//la parola si colora a mano a mano che viene digitato un carattere
//lampeggiamento del bottone della tastiera (rosso/verde e ritorno al colore originale), adesso si colora e basta
//stampa degli errori da qualche parte anzichè nella console (componente visivo)

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})

export class HomepageComponent implements OnInit{
  private indice:number = 0;
  private dizionario:string[] = [
    "parolauno",
    "paroladue",
    "parolatre",
    "parolaquattro",
    "parolacinque",
    "parolasei",
    "parolasette",
    "parolaotto",
    "parolanove",
    "paroladieci",
    "parolaundici",
    "paroladodici",
    "parolatredici",
    "parolaquattordici",
    "parolaquindici",
    "parolasedici",
    "paroladiciassette",
    "paroladiciotto",
    "paroladiciannove",
    "parolaventi",
    "parolaventuno",
    "parolaventidue",
    "parolaventitre",
    "parolaventiquattro",
    "parolaventicinque",
    "parolaventisei",
    "parolaventisette",
    "parolaventotto",
    "parolaventinove",
    "parolatrenta",
    "parolatrentuno",
    "parolatrentadue",
    "parolatrentatre",
    "parolatrentaquattro",
    "parolatrentacinque",
    "parolatrentasei",
    "parolatrentasette",
    "parolatrentotto",
    "parolatrentanove",
    "parolaquaranta",
    "parolaquarantuno",
    "parolaquarantadue"
  ];
  @ViewChild("parola") parola!:ElementRef<HTMLDivElement>; //elemento html che contiene la parola da scrivere
  @ViewChild("numero") numero!:ElementRef<HTMLDivElement>; //elemento html che contiene il punteggio totale
  @ViewChild("A") a!:ElementRef<HTMLButtonElement>;
  @ViewChild("B") b!:ElementRef<HTMLButtonElement>;
  @ViewChild("C") c!:ElementRef<HTMLButtonElement>;
  @ViewChild("D") d!:ElementRef<HTMLButtonElement>;
  @ViewChild("E") e!:ElementRef<HTMLButtonElement>;
  @ViewChild("F") f!:ElementRef<HTMLButtonElement>;
  @ViewChild("G") g!:ElementRef<HTMLButtonElement>;
  @ViewChild("H") h!:ElementRef<HTMLButtonElement>;
  @ViewChild("I") i!:ElementRef<HTMLButtonElement>;
  @ViewChild("J") j!:ElementRef<HTMLButtonElement>;
  @ViewChild("K") k!:ElementRef<HTMLButtonElement>;
  @ViewChild("L") l!:ElementRef<HTMLButtonElement>;
  @ViewChild("M") m!:ElementRef<HTMLButtonElement>;
  @ViewChild("N") n!:ElementRef<HTMLButtonElement>;
  @ViewChild("O") o!:ElementRef<HTMLButtonElement>;
  @ViewChild("P") p!:ElementRef<HTMLButtonElement>;
  @ViewChild("Q") q!:ElementRef<HTMLButtonElement>;
  @ViewChild("R") r!:ElementRef<HTMLButtonElement>;
  @ViewChild("S") s!:ElementRef<HTMLButtonElement>;
  @ViewChild("T") t!:ElementRef<HTMLButtonElement>;
  @ViewChild("U") u!:ElementRef<HTMLButtonElement>;
  @ViewChild("V") v!:ElementRef<HTMLButtonElement>;
  @ViewChild("W") w!:ElementRef<HTMLButtonElement>;
  @ViewChild("X") x!:ElementRef<HTMLButtonElement>;
  @ViewChild("Y") y!:ElementRef<HTMLButtonElement>;
  @ViewChild("Z") z!:ElementRef<HTMLButtonElement>;

  constructor(){
    focus();
    addEventListener("keydown",(event:KeyboardEvent) => {
      const carattereDigitato:string = event.key.toUpperCase();
      const parolaDaScrivere:string = this.parola.nativeElement.innerHTML;
      let messaggio:string = "";
      let controllo:boolean = true;
      if(this.indice >= parolaDaScrivere.length){
        messaggio += "All'interno della parola non esistono caratteri da considerare.";
        controllo = false;
      }
      let carattereCorrente:string = "";
      if(controllo){
        carattereCorrente = parolaDaScrivere.charAt(this.indice).toUpperCase();
        this.indice++;
        const elencoCaratteri:string[] = ["A","B","C","D","E","F","G","H","I","J",
                                          "K","L","M","N","O","P","Q","R","S","T",
                                          "U","V","W","X","Y","Z"];
        let carattereValido:boolean = false;
        elencoCaratteri.forEach(singoloCarattere => {
          if(carattereDigitato == singoloCarattere){
            carattereValido = true;
          }
        });
        if(!carattereValido){
          messaggio += "Il carattere digitato non è valido.";
          controllo = false;
        }
      }
      if(controllo){
        let punteggioAttuale:number = parseInt(this.numero.nativeElement.innerHTML);
        let colore:string = "";
        if(carattereCorrente == carattereDigitato){
          colore = "rgb(102,220,97)";
          punteggioAttuale++;
        }else{
          colore = "rgb(255,83,83)";
          punteggioAttuale--;
          if(punteggioAttuale < 0){
            punteggioAttuale = 0;
          }
        }
        this.numero.nativeElement.innerHTML = "" + punteggioAttuale;
        if(carattereDigitato == "A"){
          this.a.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "B"){
          this.b.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "C"){
          this.c.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "D"){
          this.d.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "E"){
          this.e.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "F"){
          this.f.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "G"){
          this.g.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "H"){
          this.h.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "I"){
          this.i.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "J"){
          this.j.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "K"){
          this.k.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "L"){
          this.l.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "M"){
          this.m.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "N"){
          this.n.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "O"){
          this.o.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "P"){
          this.p.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "Q"){
          this.q.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "R"){
          this.r.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "S"){
          this.s.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "T"){
          this.t.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "U"){
          this.u.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "V"){
          this.v.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "W"){
          this.w.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "X"){
          this.x.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "Y"){
          this.y.nativeElement.style.backgroundColor = colore;
        }else if(carattereDigitato == "Z"){
          this.z.nativeElement.style.backgroundColor = colore;
        }
      }else{
        console.error(messaggio);
      }
    });
  }

  public ngOnInit():void{}

  public generaParola():void{
    this.parola.nativeElement.innerHTML = "";
    this.indice = 0;
    const numeroCasuale:number = Math.round(Math.random() * (this.dizionario.length - 1));
    this.parola.nativeElement.innerHTML = this.dizionario[numeroCasuale];
  }
}
