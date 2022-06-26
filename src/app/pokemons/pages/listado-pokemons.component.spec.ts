import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPokemonsComponent } from './listado-pokemons.component';
import { PokemonsService } from '../services/pokemons.service';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TablePokemonComponent } from '../components/table-pokemon/table-pokemon.component';
import { FormularioPokemonComponent } from '../components/formulario-pokemon/formulario-pokemon.component';
import { of, Observable } from 'rxjs';
import { ResponsePokemon } from '../interfaces/ResponsePokemon';
import { TableColumns } from '../interfaces/TableColumns';
import { DeletePokemonR } from '../interfaces/deletePokemonR';



describe('ListadoPokemonsComponent', () => {
  let component: ListadoPokemonsComponent;
  let fixture: ComponentFixture<ListadoPokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoPokemonsComponent, TablePokemonComponent, FormularioPokemonComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [PokemonsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear componente de listado de pokemones correctamente', () => {
    // expect(component).toBeTruthy();
    component.initData();
    
    expect(component.pokemons).toEqual([]);
    expect(component.pokemonCopied).toEqual([]);
    expect(component.edit).toBeFalse();
  });

  it('Iniciar data para cargar en tabla', () => { 
    component.initData();
    expect(component.pokemonCopied.length).toEqual(0);
    expect(component.pokemons.length).toEqual(0);
    expect(component.pokemons).toBeTruthy();
  })

  it('Crar formulario reactivo', () => { 
    expect(component.itemForm).toBeTruthy();
  })

  it('Crear columnas correctamente', () => {
    expect(component.columns).toBeTruthy();
  });

  it('Cancelar formulario', () => {
    component.cancelar();
    expect(component.edit).toBeFalsy();
    expect(component.create).toBeFalsy();
  });

  it('Guardar Pokmenon', () => {
    component.create = true;
    component.itemForm.controls['name'].setValue('Pikachu');
    component.itemForm.controls['image'].setValue('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
    component.itemForm.controls['attack'].setValue(50);
    component.itemForm.controls['defense'].setValue(50);
    component.itemForm.controls['hp'].setValue(50);
    component.itemForm.controls['type'].setValue('electrico');
    component.itemForm.controls['id_author'].setValue(1);
    component.savePokemon();
    component.pokemonService.savePokemon().subscribe(
      (data) => {
        expect(data).toBeTruthy();
        expect(component.create).toBeFalsy();
        expect(component.edit).toBeFalsy();
      }
    )
    expect(component.edit).toBeFalsy();
  });

  it('Editar Pokmenon', () => {
    component.edit = true;
    component.itemForm.controls['name'].setValue('Pikachu');
    component.itemForm.controls['image'].setValue('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png');
    component.itemForm.controls['attack'].setValue(50);
    component.itemForm.controls['defense'].setValue(50);
    component.itemForm.controls['hp'].setValue(50);
    component.itemForm.controls['type'].setValue('electrico');
    component.itemForm.controls['id_author'].setValue(1);
    component.savePokemon();
    component.pokemonService.savePokemon().subscribe(
      (data) => {
        expect(data).toBeTruthy();
        expect(component.create).toBeFalsy();
        expect(component.edit).toBeFalsy();
      }
    )
    expect(component.create).toBeFalsy();
  })

  it('Eliminar Pokmenon', () => {
    const id = 372;
    const response =
    {
      "success": true,
      "type": "pokemon_removed",
      "data": []
    }
    component.deletePokemon(1);
    component.pokemonService.deletePokemon(id).subscribe(
      (data) => {
        expect(data).toEqual(response);
      }
    )
    expect(component.pokemons).toBeTruthy();
  });

  it('Buscar pokemones', () => {
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('#search');
    button.dispatchEvent(new Event('keyup'));
  
    fixture.detectChanges();
  
    expect(component.pokemons).toBeTruthy();
  })

  it('create pokemon', () => {
    component.createPokemnon();
    expect(component.create).toBeTruthy();
    expect(component.edit).toBeFalsy();
  });

  it('edit pokemon', () => {
    const pokemon = {
      "id": 372,
      "name": "Alakazam",
      "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
      "attack": 100,
      "defense": 64,
      "hp": 100,
      "type": "psychic",
      "id_author": 1
    }
    component.editPokemon(pokemon);
    expect(component.edit).toBeTruthy();
    expect(component.create).toBeFalsy();
  })


});
