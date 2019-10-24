import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  listItems = [];

  constructor(public service: HeroService) { }

  ngOnInit() {
    this.service.getHeroList();
  }

  populateForm(hero: Hero) {
    this.service.formData = Object.assign({}, hero);
  }

  onDelete(id: number) {
      if (confirm('Are you sure?')) {
            this.service.deleteHero(id).subscribe(res => {
        this.service.getHeroList();
      });
    }
  }
}
