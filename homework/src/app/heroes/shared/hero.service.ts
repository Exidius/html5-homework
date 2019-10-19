import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  formData: Hero;
  list: Hero[];
  readonly rootUrl = '';

  constructor(private http: HttpClient) { }

  postHero(formData: Hero) {
    return this.http.post(this.rootUrl + '/', formData);
  }

  getHeroList() {
    this.http.get('http://81.2.241.234:8080/hero').toPromise().then(res => this.list = res as Hero[]);
  }
}
