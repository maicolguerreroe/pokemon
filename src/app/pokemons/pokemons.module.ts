import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { ListadoPokemonsComponent } from './pages/listado-pokemons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablePokemonComponent } from './components/table-pokemon/table-pokemon.component';
import { FormularioPokemonComponent } from './components/formulario-pokemon/formulario-pokemon.component';
import { PokemonsService } from './services/pokemons.service';


@NgModule({
  declarations: [
    ListadoPokemonsComponent,
    TablePokemonComponent,
    FormularioPokemonComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [PokemonsService]

})
export class PokemonsModule { }
