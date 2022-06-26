import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPokemonsComponent } from './pages/listado-pokemons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListadoPokemonsComponent
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
