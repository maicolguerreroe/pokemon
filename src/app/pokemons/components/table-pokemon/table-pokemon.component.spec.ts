import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePokemonComponent } from './table-pokemon.component';

describe('TablePokemonComponent', () => {
  let component: TablePokemonComponent;
  let fixture: ComponentFixture<TablePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePokemonComponent);
    component = fixture.componentInstance;
    component.columns = [
      { nombre: 'nombre', descripcion: 'Nombre' },
      { nombre: 'imagen', descripcion: 'Imagen' },
      { nombre: 'ataque', descripcion: 'Ataque' },
      { nombre: 'defensa', descripcion: 'Defensa' },
      { nombre: 'acciones', descripcion: 'Acciones' }
    ];

    component.pokemons =
      [
        {
          "id": 372,
          "name": "Alakazam",
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
          "attack": 100,
          "defense": 64,
          "hp": 100,
          "type": "psychic",
          "id_author": 1
        },
        {
          "id": 426,
          "name": "Mewtwo",
          "image": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f3.png",
          "attack": 100,
          "defense": 100,
          "hp": 100,
          "type": "Legendario",
          "id_author": 1
        }
      ]
    fixture.detectChanges();
  });

  it('Crear tabla para listar pokemones', () => {
    expect(component).toBeTruthy();
  });

  it('al dar click en el boton editar debe mostrar el formularo', () => {
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('#edit');
    spyOn(component.editPokemon, 'emit');
    button.click();
    fixture.detectChanges();
    expect(component.editPokemon.emit).toHaveBeenCalled();
  });

  it('al dar click en el boton eliminar debe emitir el evento', () => {
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelector('#delete');
    spyOn(component.deletePokemon, 'emit');
    button.click();
    fixture.detectChanges();
    expect(component.deletePokemon.emit).toHaveBeenCalled();
  });

});
