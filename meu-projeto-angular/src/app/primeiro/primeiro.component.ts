import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})
export class PrimeiroComponent implements OnInit {

  nome = "Grande Porte";
  minhaClasse= "btn-success"

  usuarios = [
    {id : 1, nome : "Usuário 1", email: "usu1@usuario.com"},
    {id : 2, nome : "Usuário 2", email: "usu2@usuario.com"},
    {id : 3, nome : "Usuário 3", email: "usu3@usuario.com"}
  ]

  constructor() { }

  mostrarmensagem(valor: string){
    this.nome = valor;
    alert (valor);

  }

  ngOnInit(): void {
  }

  alterarString(){

  if(this.minhaClasse == "btn-danger"){
    this.minhaClasse="btn-success";
  }else{
      this.minhaClasse = "btn-danger";
    }
  }

}
