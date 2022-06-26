import { Component, Input, OnInit, Output } from '@angular/core';
import { TableColumns } from '../../interfaces/TableColumns';
import { ResponsePokemon } from '../../interfaces/ResponsePokemon';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-table-pokemon',
  templateUrl: './table-pokemon.component.html',
  styleUrls: ['./table-pokemon.component.css']
})
export class TablePokemonComponent implements OnInit {

  @Input('columns') columns: TableColumns[] = [];
  @Input('pokemons') pokemons: ResponsePokemon[] = [];

  @Output() editPokemon = new EventEmitter<ResponsePokemon>();
  @Output() deletePokemon = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  editItem(pokemon:ResponsePokemon):void{
    this.editPokemon.emit(pokemon);
  }

  deleteItem(pokemonId: number): void { 
    this.deletePokemon.emit(pokemonId);
  }

}
