/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { HttpPokemonService } from './HttpPokemon.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: HttpPokemon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpPokemonService],
      imports: [HttpClientModule]
    });
  });

  it('Crear httpPokemon services', inject([HttpPokemonService], (service: HttpPokemonService) => {
    expect(service).toBeTruthy();
  }));
});
