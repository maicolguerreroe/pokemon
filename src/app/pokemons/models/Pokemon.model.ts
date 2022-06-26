import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResponsePokemon } from '../interfaces/ResponsePokemon';
import { TableColumns } from '../interfaces/TableColumns';

export class PokemonModel implements ResponsePokemon {
    id: number;
    name: string;
    image: string;
    attack: number;
    defense: number;
    hp: number;
    type: string;
    id_author: number;

    constructor() {
        this.id = 0;
        this.name = '';
        this.image = '';
        this.attack = 0;
        this.defense = 0;
        this.hp = 0;
        this.type = '';
        this.id_author = 1;
    }

    static newPokemonForm(data: any) {
        const newObject = new PokemonModel();
        newObject.id = data['id'];
        newObject.name = data['name'];
        newObject.image = data['image'];
        newObject.attack = data['attack'];
        newObject.defense = data['defense'];
        newObject.hp = data['hp'];
        newObject.type = data['type'];
        newObject.id_author = data['id_author'] || data['idAuthor'];

        return newObject;
    }

    formBuilder(fb: FormBuilder): FormGroup {
        return fb.group({
            id: [this.id],
            name: [this.name, [Validators.required]],
            image: [this.image, [Validators.required]],
            attack: [this.attack],
            defense: [this.defense],
            hp: [this.hp],
            type: [this.type, [Validators.required]],
            id_author: [this.id_author]
        });
    }
}

export class PokemonConfigTable {
    public static getColumns(): TableColumns[] {
        return [
            { nombre: 'nombre', descripcion: 'Nombre' },
            { nombre: 'imagen', descripcion: 'Imagen' },
            { nombre: 'ataque', descripcion: 'Ataque' },
            { nombre: 'defensa', descripcion: 'Defensa' },
            { nombre: 'acciones', descripcion: 'Acciones' }
        ]
    }
}
