import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-pokemon',
  templateUrl: './formulario-pokemon.component.html',
  styleUrls: ['./formulario-pokemon.component.css']
})
export class FormularioPokemonComponent implements OnInit {

  @Input() itemForm!: FormGroup;
  @Input() edit: boolean = false;
  @Input() create: boolean = false;

  @Output() savePokemon = new EventEmitter<any>();
  @Output() cancelar = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  saveItem() {
    this.savePokemon.emit();
  }

  cancel() {
    this.cancelar.emit();
  }

}
