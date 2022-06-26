import { Injectable } from '@angular/core';
import { HttpPokemonService } from 'src/app/core/services/HttpPokemon.service';
import { PokemonConfigTable, PokemonModel } from '../models/Pokemon.model';
import { TableColumns } from '../interfaces/TableColumns';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResponsePokemon } from '../interfaces/ResponsePokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  itemForm: FormGroup;

  private _columns;
  constructor(private httpPokemon: HttpPokemonService,
    private fb: FormBuilder) { 
    this._columns = PokemonConfigTable.getColumns();
    this.itemForm = new PokemonModel().formBuilder(this.fb);
  }
  
  getAll(){
    return this.httpPokemon.getAll();
  }

  columns(): TableColumns[] {
    return this._columns;
  }

  editPokemon(data: ResponsePokemon) {
    let item = PokemonModel.newPokemonForm(data)
    this.itemForm = item.formBuilder(this.fb);
  }

  createPokemon() {
    let form = new PokemonModel();
    this.itemForm = form.formBuilder(this.fb);
  }

  savePokemon() {
    return this.httpPokemon.savePokemon({
      ...this.itemForm.value,
      idAuthor: this.itemForm.value.id_author
    });
  }
  
  updatePokemon() {
    return this.httpPokemon.updatePokemon({
      ...this.itemForm.value,
      idAuthor: this.itemForm.value.id_author
    });
  }

  deletePokemon(id: number) {
    return this.httpPokemon.deletePokemon(id);
  }

}
