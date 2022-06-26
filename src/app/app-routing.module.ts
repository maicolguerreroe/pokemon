import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'listado',
    loadChildren: () => import('./pokemons/pokemons.module').then(m => m.PokemonsModule)
  },
  {
    path: '**',
    redirectTo: 'listado',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
