import {Component,ElementRef,OnInit,ViewChild} from "@angular/core";
import {TimerHandle} from "rxjs/internal/scheduler/timerHandle";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})

export class HomepageComponent implements OnInit{
  private timerScrittura:TimerHandle = 0;
  private messaggioErrore:string = "";
  private coloreDefaultBottone:string = "rgb(238,238,238)"; //codice rgb preso dallo stile css del componente
  private dizionario:string[] = [
    "ferro",
    "acqua",
    "ancora",
    "buono",
    "esperienza",
    "immaginare",
    "successo",
    "secondo",
    "parola",
    "opposto",
    "ragazza",
    "fratello",
    "mamma",
    "soldi",
    "ridere",
    "strada",
    "insieme",
    "improvviso",
    "soluzione",
    "acciaio",
    "metallo",
    "plastica",
    "ripetizione",
    "gioco",
    "portare",
    "scrivere",
    "rappresentare",
    "potenza",
    "paragrafo",
    "capitolo",
    "lontano",
    "vicino",
    "cavallo",
    "strofinare",
    "divertimento",
    "risposta",
    "richiesta",
    "spettacolo",
    "pianura"
  ];
  @ViewChild("caratteririmanenti") caratteririmanenti!:ElementRef<HTMLDivElement>; //elemento html che contiene la parola da scrivere
  @ViewChild("caratteridigitati") caratteridigitati!:ElementRef<HTMLDivElement>; //elemento html che contiene i caratteri già digitati
  @ViewChild("numero") numero!:ElementRef<HTMLDivElement>; //elemento html che contiene il punteggio totale
  @ViewChild("tempotrascorso") tempotrascorso!:ElementRef<HTMLDivElement>; //elemento html che contiene il tempo trascorso mentre si digita la frase
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
      this.resettaColoriTastiera();
      this.messaggioErrore = "";
      const carattereDigitato:string = event.key.toUpperCase();
      const parolaDaScrivere:string = this.caratteririmanenti.nativeElement.innerHTML;
      let messaggio:string = "";
      let controllo:boolean = true;
      if(parolaDaScrivere.length <= 0){
        messaggio += "La frase è terminata devi generarne una nuova.\n";
        controllo = false;
      }
      if(controllo){
        if(!this.controllaCarattere(carattereDigitato)){
          messaggio += "Il carattere digitato non è valido.\n";
          controllo = false;
        }
      }
      if(controllo){
        const carattereCorrente:string = parolaDaScrivere.charAt(0).toUpperCase();
        let punteggioAttuale:number = parseInt(this.numero.nativeElement.innerHTML);
        let colore:string = "";
        if(carattereCorrente == carattereDigitato){
          colore = "rgb(102,220,97)"; //codice rgb del colore verde preso dallo stile css del componente.
          punteggioAttuale++;
        }else{
          colore = "rgb(255,83,83)"; //codice rgb del colore rosso scelto per indicare che il carattere
                                     //digitato è sbagliato evidenziandolo sulla tastiera visibile sullo
                                     //schermo.
          punteggioAttuale--;
          if(punteggioAttuale < 0){
            punteggioAttuale = 0;
          }
        }
        const caratterigiadigitati:string = this.caratteridigitati.nativeElement.innerHTML;
        const caratteridadigitare:string = this.caratteririmanenti.nativeElement.innerHTML;
        let stringadadigitarerimanente:string = "";
        if(caratteridadigitare.length > 1){
          for(let i = 1;i < caratteridadigitare.length;i++){
            stringadadigitarerimanente += caratteridadigitare[i];
          }
        }
        if(caratteridadigitare.length == 1){
          clearInterval(this.timerScrittura);
        }
        const stringadigitatamodificata:string = caratterigiadigitati + caratteridadigitare.charAt(0);
        this.caratteridigitati.nativeElement.innerHTML = stringadigitatamodificata;
        this.caratteririmanenti.nativeElement.innerHTML = stringadadigitarerimanente;
        this.numero.nativeElement.innerHTML = "" + punteggioAttuale;
        if(carattereDigitato == "A"){
          const sfondoVecchio:string = this.a.nativeElement.style.backgroundColor;
          this.a.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.a.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "B"){
          const sfondoVecchio:string = this.b.nativeElement.style.backgroundColor;
          this.b.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.b.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "C"){
          const sfondoVecchio:string = this.c.nativeElement.style.backgroundColor;
          this.c.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.c.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "D"){
          const sfondoVecchio:string = this.d.nativeElement.style.backgroundColor;
          this.d.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.d.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "E"){
          const sfondoVecchio:string = this.e.nativeElement.style.backgroundColor;
          this.e.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.e.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "F"){
          const sfondoVecchio:string = this.f.nativeElement.style.backgroundColor;
          this.f.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.f.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "G"){
          const sfondoVecchio:string = this.g.nativeElement.style.backgroundColor;
          this.g.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.g.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "H"){
          const sfondoVecchio:string = this.h.nativeElement.style.backgroundColor;
          this.h.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.h.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "I"){
          const sfondoVecchio:string = this.i.nativeElement.style.backgroundColor;
          this.i.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.i.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "J"){
          const sfondoVecchio:string = this.j.nativeElement.style.backgroundColor;
          this.j.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.j.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "K"){
          const sfondoVecchio:string = this.k.nativeElement.style.backgroundColor;
          this.k.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.k.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "L"){
          const sfondoVecchio:string = this.l.nativeElement.style.backgroundColor;
          this.l.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.l.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "M"){
          const sfondoVecchio:string = this.m.nativeElement.style.backgroundColor;
          this.m.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.m.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "N"){
          const sfondoVecchio:string = this.n.nativeElement.style.backgroundColor;
          this.n.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.n.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "O"){
          const sfondoVecchio:string = this.o.nativeElement.style.backgroundColor;
          this.o.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.o.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "P"){
          const sfondoVecchio:string = this.p.nativeElement.style.backgroundColor;
          this.p.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.p.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "Q"){
          const sfondoVecchio:string = this.q.nativeElement.style.backgroundColor;
          this.q.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.q.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "R"){
          const sfondoVecchio:string = this.r.nativeElement.style.backgroundColor;
          this.r.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.r.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "S"){
          const sfondoVecchio:string = this.s.nativeElement.style.backgroundColor;
          this.s.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.s.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "T"){
          const sfondoVecchio:string = this.t.nativeElement.style.backgroundColor;
          this.t.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.t.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "U"){
          const sfondoVecchio:string = this.u.nativeElement.style.backgroundColor;
          this.u.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.u.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "V"){
          const sfondoVecchio:string = this.v.nativeElement.style.backgroundColor;
          this.v.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.v.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "W"){
          const sfondoVecchio:string = this.w.nativeElement.style.backgroundColor;
          this.w.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.w.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "X"){
          const sfondoVecchio:string = this.x.nativeElement.style.backgroundColor;
          this.x.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.x.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "Y"){
          const sfondoVecchio:string = this.y.nativeElement.style.backgroundColor;
          this.y.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.y.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }else if(carattereDigitato == "Z"){
          const sfondoVecchio:string = this.z.nativeElement.style.backgroundColor;
          this.z.nativeElement.style.backgroundColor = colore;
          setTimeout(() => {
            this.z.nativeElement.style.backgroundColor = sfondoVecchio;
          },500);
        }
      }else{
        this.messaggioErrore = messaggio;
      }
    });
  }

  public ngOnInit():void{}

  public generaParola():void{
    this.caratteridigitati.nativeElement.innerHTML = "";
    this.caratteririmanenti.nativeElement.innerHTML = "";
    this.resettaColoriTastiera();
    this.messaggioErrore = "";
    const numeroCasuale:number = Math.round(Math.random() * (this.dizionario.length - 1));
    this.caratteririmanenti.nativeElement.innerHTML = this.dizionario[numeroCasuale];
    clearInterval(this.timerScrittura);
    this.tempotrascorso.nativeElement.innerHTML = "0";
    this.timerScrittura = setInterval(() => {
      let attuale:number = parseInt(this.tempotrascorso.nativeElement.innerHTML);
      attuale++;
      this.tempotrascorso.nativeElement.innerHTML = "" + attuale;
    },1000);
  }

  public controllaCarattere(carattereDaControllare:string):boolean{
    const elencoCaratteri:string[] = ["A","B","C","D","E",
                                      "F","G","H","I","J",
                                      "K","L","M","N","O",
                                      "P","Q","R","S","T",
                                      "U","V","W","X","Y",
                                      "Z"];
    for(let i = 0;i < elencoCaratteri.length;i++){
      if(carattereDaControllare == elencoCaratteri[i]){
        return true;
      }
    }
    return false;
  }

  public resettaColoriTastiera():void{
    this.a.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.b.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.c.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.d.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.e.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.f.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.g.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.h.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.i.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.j.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.k.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.l.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.m.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.n.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.o.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.p.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.q.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.r.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.s.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.t.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.u.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.v.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.w.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.x.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.y.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
    this.z.nativeElement.style.backgroundColor = this.coloreDefaultBottone;
  }

  public getMessaggioErrore():string{
    return this.messaggioErrore;
  }
}
