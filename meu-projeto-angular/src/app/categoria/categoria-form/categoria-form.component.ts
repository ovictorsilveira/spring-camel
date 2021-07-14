import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriasFormComponent implements OnInit {

  meuForm : FormGroup | any = null;
  isEdicao : boolean = false;
  id : number = 0;

  constructor(
    private formBuilder : FormBuilder, 
    private categoriaService : CategoriaService,
    private router: Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.meuForm = new FormGroup (
    //   {
    //     nome : new FormControl ( null, [Validators.required] )
    //   }
    // );

    this.meuForm = this.formBuilder.group(
      {
        id : [ null, [Validators.required] ],
        name : [ null, [Validators.required] ],
        description : [ null, [Validators.required] ],
        status : [ null, [Validators.required] ]
      }
    );
   
    this.activatedRoute.params
      .subscribe(
        (param) => {
          console.log(param)

          // é Edição
          if (param.id){
            this.isEdicao = true;
            this.id = param.id;
            this.categoriaService.getOne( this.id ).subscribe(
              (resp : any) => {
                console.log (resp)
                this.meuForm.patchValue( resp.data )
              }
            )
          }
          // criação
          else {
            this.isEdicao = false;
          }
        }
      );

  }

  onSubmit(){
    console.log(this.meuForm)

    // Verificando se é edição
    if (this.isEdicao){
      this.categoriaService.update( this.id, this.meuForm.value ).
        subscribe(
          (data) => {
            this.router.navigate(['/categoria/categoria-list'])
          }
        )
    }
    else{

      this.categoriaService.save(this.meuForm.value)
      .subscribe(
        (data) => {
          console.log(data)
          this.meuForm.reset();
          this.router.navigate(['/categoria/categoria-list'])
        }
      );

    }


  }

}