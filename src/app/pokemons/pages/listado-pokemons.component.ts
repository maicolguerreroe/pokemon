import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { ResponsePokemon } from '../interfaces/ResponsePokemon';

@Component({
  selector: 'app-listado-pokemons',
  templateUrl: './listado-pokemons.component.html',
  styleUrls: ['./listado-pokemons.component.css'],
})
export class ListadoPokemonsComponent implements OnInit {
  public pokemons: ResponsePokemon[] = [];
  pokemonCopied: ResponsePokemon[] = [];;

  edit: boolean = false;
  create: boolean = false

  constructor(public pokemonService: PokemonsService) {
  }

  ngOnInit(): void {
    this.initData();
  }
  
  initData() {
    this.pokemons = [];
    this.pokemonCopied = [];
    this.pokemonService.getAll().subscribe(data => {
      data.map(pokemon => { 
        this.pokemons.push(pokemon);
        this.pokemonCopied.push(pokemon);
      })
    });    
  }

  get itemForm() {
    return this.pokemonService.itemForm;
  }

  get columns() {
    return this.pokemonService.columns();
  }

  cancelar() {
    this.edit = false;
    this.create = false;
  }

  savePokemon() {
    if (this.create) { 
      this.pokemonService.savePokemon().subscribe(data => {
        this.pokemons.push(data);
        this.edit = false;
        this.create = false;
        alert(`Pokemon ${data.name} creado correctamente`);
      });
    }
    else if (this.edit) {
      this.pokemonService.updatePokemon().subscribe(data => {
        this.pokemons.map((pokemon, index) => {
          if (pokemon.id === data.id) {
            this.pokemons[index] = data;
          }
        });

        this.edit = false;
        this.create = false;
        alert(`Pokemon ${data.name} actualizado correctamente`);
      });
    }
  }

  editPokemon(pokemon: ResponsePokemon) {
    this.edit = true;
    this.create = false;
    this.pokemonService.editPokemon(pokemon);
    location.hash = "#formulario";
  }

  createPokemnon() {
    this.create = true;
    this.edit = false;
    this.pokemonService.createPokemon();
    location.hash = "#formulario";
  }

  deletePokemon(id: number) { 
    this.pokemonService.deletePokemon(id).subscribe(data => {
      this.pokemons = this.pokemons.filter(pokemon => pokemon.id != id);
      alert('Pokemon eliminado correctamente');
    });
  }

  searchPokemon($event: any) {
    let value = $event.target.value;
    if (value.length > 0) {
      this.pokemons = this.pokemonCopied.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(value.toLowerCase());
      });
    }
    else {
      this.pokemons = this.pokemonCopied;
    }
  }
}
