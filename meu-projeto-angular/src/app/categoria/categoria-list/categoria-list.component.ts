import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent implements OnInit {

  usuarios: any = null;
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.categoriaService.getAll()
      .subscribe(
        (data) => {
          this.usuarios = data;
        }
      );
  }

  onDelete ( id : number ){
    this.categoriaService.delete ( id )
      .subscribe(
        (data) => {
             //this.getAll()
          
          // for(let i = 0; i < this.categorias.data.length; i++){
            
          //   if (this.categorias.data[i].id == id){      
          //     this.categorias.data.splice(i,1);
          //   }
          // }

          let i = this.usuarios.data.findIndex( (x : any) => x.id == id );
          this.usuarios.data.splice(i,1);
        }
      );
  }

}