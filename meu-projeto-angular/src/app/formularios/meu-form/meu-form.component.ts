import { ServiceService } from './../service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  meuForm :FormGroup | any = null;

  constructor(private ServiceService: ServiceService) { }
 


  ngOnInit(): void {


    this.meuForm = new FormGroup(
      {
      email: new FormControl("a@a.com", [Validators.required, Validators.email, Validators.minLength(3)] ),
      Password: new FormControl(null, [Validators.required]),
      cep: new FormControl(null, [Validators.required] ),
      logradouro: new FormControl(null, [Validators.required] ),
      bairro: new FormControl(null, [Validators.required] ),
      localidade: new FormControl(null, [Validators.required] ),
      uf: new FormControl(null, [Validators.required] )
     }
    );
  
   
    console.log(this.meuForm)

  }
   
  onBuscarCep(){

    if ( this.meuForm.controls.cep.value.length == 8 && this.isSomenteNumero(this.meuForm.controls.cep.value)){
 
       this.ServiceService.getCep( this.meuForm.controls.cep.value )
       .subscribe(
         (data : any) => {
           console.log(data);
           this.meuForm.patchValue(
             data
           );
           // this.meuForm.patchValue(
           //   {
           //     logradouro : data.logradouro,
           //     cidade : data.localidade
           //   }
           // );
         },
         (error:any) => {
           console.log(error);
           alert("Erro ao consultar a API via cep");
         },
         () => {
           alert("Cep invalido");
         }

       );
     }
     else{
       alert("erro na digitação do cep");
     }
    }

    
      isSomenteNumero(value:any){
    return ((value != null) &&
           (value !== '') &&
           !isNaN(Number(value.toString())));
  }
 
 }
