import { Component } from '@angular/core';


@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent {
  public tenerHambre: boolean = false;
  public deshabilitarCheck: boolean = true;
  public textoHambre: string = ""
  public textoAprobar: string = ""
  public esteFinde: string = "ver la tele"
  public nombre: string = "Jesus"

  heHechoClick(): void{
    alert("plin")
  }

  verSiTengoHambre(evento: Event): void {
    // alert(evento.target)
    if((<HTMLInputElement>evento.target).checked){
      this.textoHambre = "Pues tengo hambre, voy a comer algo"
    } else {
      this.textoHambre = "No tengo nada de hambre"
    }
  }

  verSiApruebo(x: Event): void{
    if((<HTMLInputElement>x.target).value=="si"){
      this.textoAprobar = "Pues apruebo"
    } else if((<HTMLInputElement>x.target).value=="no"){
      this.textoAprobar = "Pues no"
    }
  }
  
  planearEsteFinde(x: Event): void{
    this.esteFinde = (<HTMLInputElement>x.target).value
  }
}
