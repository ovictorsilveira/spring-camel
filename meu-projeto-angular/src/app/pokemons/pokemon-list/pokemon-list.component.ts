import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  //private http = new HttpClient();

  pokemons : any = null;
  pokemonSelecionado : any = null;
  offset : number = 0;
  limit : number = 5;

  constructor(private pokemonService : PokemonService, private ac:ActivatedRoute) { }

  // arrow functions =>
  ngOnInit(): void {

    this.ac.queryParams
    .subscribe( (params) => {
      console.log(params);
    }

    );

    this.pokemonService.getAll(this.offset, this.limit)
      .subscribe(  (x) => {
        this.pokemons = x;
        console.log(this.pokemons)
      } );

  }

  selecionarPokemon( url : string ){

      this.pokemonService.getOne(url)
      .subscribe(  (x) => {
        this.pokemonSelecionado = x;
        console.log(this.pokemonSelecionado)
      } );
  }

  proximaPagina(){

    this.offset += this.limit;

    this.pokemonService.getAll(this.offset, this.limit)
      .subscribe(
        (data : any) => {
          this.pokemons = data;
          
          
          
        } 
      );
  }

}
