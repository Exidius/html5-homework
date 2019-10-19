import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.service.getHeroList();
  }

  populateForm(hero: Hero) {
    this.service.formData = hero;
    console.log('clicked');
  }
}
