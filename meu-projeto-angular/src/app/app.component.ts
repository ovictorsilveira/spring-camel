import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //variável em typescript
  title : any = 'meu-projeto-angular';

  empresa : string = 'BRQ';

  salario : number = 90;

  mostrarMensagem(){
    let nome = 'Victor';
    return nome;
  }

  meuClique(){
    console.log("oi");
    this.title = "oi";
  }

  onKeyup(valorDigitado : string){
    console.log(valorDigitado );
  }
  
}

