import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  usuarioSelecionado : any = null;

  usuarios = [
    { id : 1, nome : "Usuário 1", email: "usu1@usuario.com", cpf : '12345678901' },
    { id : 2, nome : "Usuário 2", email: "usu2@usuario.com", cpf : '12345678901' },
    { id : 3, nome : "Usuário 3", email: "usu3@usuario.com", cpf : '12345678901' }
  ]

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  onUsuarioEmitter(valor : string){
    console.log("Output propeties " + valor);
  }

  onSelecionarClick( usuario : any ){
    console.log(usuario)
    this.usuarioSelecionado = usuario;
  }

  onUsuarioSalvarEmitter( usuarioFilho : any ){
    //achar o usuário que foi alterado e substituir no array
    for (let i = 0; i < this.usuarios.length; i++){
      if (this.usuarios[i].id == usuarioFilho.id){
        this.usuarios[i] = usuarioFilho;
      }
    }
  }

}
