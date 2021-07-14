import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error-field-messanges',
  templateUrl: './error-field-messanges.component.html',
  styleUrls: ['./error-field-messanges.component.css']
})
export class ErrorFieldMessangesComponent implements OnInit {

  //variável filho que recebe os valores do pai
  @Input() field : FormControl | any = null;
  @Input() nome : any ;

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(){
    if (this.field.errors){
      if (this.field.errors.required){
        return "Campo " + this.nome + " está vazio";
      }
      else if(this.field.errors.minlength){
        return  "Campo " + this.nome + " precisa ter tamanho mínimo de " + this.field.errors.minlength.requiredLength ;
      }

      return "Inválido";
    }
    return null;
  }

}