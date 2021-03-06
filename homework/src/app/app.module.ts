import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { SpeciesComponent } from './species/species.component';
import { SpecieComponent } from './species/specie/specie.component';
import { SpecieListComponent } from './species/specie-list/specie-list.component';
import { HeroService } from './heroes/shared/hero.service';
import { SpecieService } from './species/shared/specie.service';
import { NavComponent } from './nav/nav.component';
import { NotreadyComponent } from './notready/notready.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    HeroListComponent,
    SpeciesComponent,
    SpecieComponent,
    SpecieListComponent,
    NavComponent,
    NotreadyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    VirtualScrollerModule,
    AppRoutingModule,
  ],
  providers: [HeroService, SpecieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
