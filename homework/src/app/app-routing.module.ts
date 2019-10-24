import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { SpeciesComponent } from './species/species.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'species', component: SpeciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
