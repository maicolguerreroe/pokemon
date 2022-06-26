import { Pokemon } from './../../pokemons/interfaces/Pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponsePokemon } from '../../pokemons/interfaces/ResponsePokemon';
import { Observable } from 'rxjs';
import { DeletePokemonR } from '../../pokemons/interfaces/deletePokemonR';

@Injectable({
  providedIn: 'root'
})
export class HttpPokemonService {

  private baseUrl = 'https://bp-pokemons.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getAll():Observable<ResponsePokemon[]> {
    return this.http.get<ResponsePokemon[]>(`${this.baseUrl}/?idAuthor=1`);
  }

  updatePokemon(data: Pokemon):Observable<ResponsePokemon> { 
    return this.http.put<ResponsePokemon>(`${this.baseUrl}/${data.id}`, data);
  }

  savePokemon(data: Pokemon):Observable<ResponsePokemon>  { 
    return this.http.post<ResponsePokemon>(`${this.baseUrl}`, data);
  }

  deletePokemon(id: number) { 
    return this.http.delete<DeletePokemonR>(`${this.baseUrl}/${id}`);
  }

}
