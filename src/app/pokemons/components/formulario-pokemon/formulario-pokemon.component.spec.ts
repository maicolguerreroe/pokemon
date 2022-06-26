import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPokemonComponent } from './formulario-pokemon.component';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

describe('FormularioPokemonComponent', () => {
  let component: FormularioPokemonComponent;
  let fixture: ComponentFixture<FormularioPokemonComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioPokemonComponent],
      imports: [ReactiveFormsModule],
      providers: [{ provide: FormBuilder, useValue: formBuilder }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPokemonComponent);
    component = fixture.componentInstance;
    component.itemForm = formBuilder.group(
      {
        id: [0],
        name: ['', [Validators.required]],
        image: ['', [Validators.required]],
        attack: [0],
        defense: [0],
        hp: [0],
        type: ['', [Validators.required]],
        id_author: [1]
      }
    );
    fixture.detectChanges();

  });

  it('Formulario de pokemon exisitir el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Si la variable crear es true presentar Crear pokemon', () => {
    component.create = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Crear pokemon');
  });

  it('Si la variable crear es true presentar Editar pokemon', () => {
    component.edit = true;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Editar pokemon');
  });

  it('Al dar click en el boton cancelar se oculta el formulario de crear-editar', () => {
    component.create = false;
    component.edit = false;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#cancelar').click();
    expect(component.create).toBeFalsy();
    expect(component.edit).toBeFalsy();
  });

  it('Al dar click en el boton guardar si esta editando actualiza el registro', () => { 
    component.edit = false;
    component.create = false;
    
    component.itemForm.patchValue({
      id: 372,
      name: 'Bulbasaur',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
      attack: 49,
      defense: 49,
      hp: 45,
      type: 'Grass',
      id_author: 1
    });
    
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('#guardar').click();
    expect(component.edit).toBeFalsy();
    expect(component.create).toBeFalsy();
  });



});
