import { TestBed } from '@angular/core/testing';

import { PokemonsService } from './pokemons.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpPokemonService } from '../../core/services/HttpPokemon.service';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { ResponsePokemon } from '../interfaces/ResponsePokemon';
import { DeletePokemonR } from '../interfaces/deletePokemonR';

const mockDeletePokemon: DeletePokemonR = {
  "success": true,
  "type": "pokemon_removed",
  "data": []
}

describe('PokemonsService', () => {
  let service: PokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpPokemonService],
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    service = TestBed.inject(PokemonsService);
  });

  it('Servicio de pokemon en modulo creado', () => {
    expect(service).toBeTruthy();
  });

  it('Generar columnas', () => {
    expect(service.columns()).toBeTruthy();
  })

  it('Crear un formulario reactivo', () => {
    expect(service.itemForm).toBeTruthy();
  });

  it('editar pokemon', () => {
    expect(service.itemForm).toBeTruthy();
  });

  it('eliminar pokemon', () => {
    const val = spyOn(service, 'deletePokemon').and.returnValue(of(mockDeletePokemon));
    service.deletePokemon(372);
    expect(val).toHaveBeenCalled();
  });

});
