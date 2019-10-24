import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { SpeciesComponent } from './species/species.component';
import { NotreadyComponent } from './notready/notready.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'species', component: SpeciesComponent },
  { path: 'notready', component: NotreadyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
