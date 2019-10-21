import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  formData: Hero;
  list: Hero[];
  readonly rootUrl = 'http://81.2.241.234:8080';

  constructor(private http: HttpClient) { }

  postHero(formData: Hero) {
    const body = new HttpParams()
    .set(`name`, formData.name)
    .set(`desc`, formData.description);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post(this.rootUrl + '/hero', body.toString(), { headers, observe: 'response' });
  }

  getHeroList() {
    this.http.get(this.rootUrl + '/hero?count=0').toPromise().then(res => this.list = res as Hero[]);
  }

  putHero(formData: Hero) {
    const body = new HttpParams()
    .set(`name`, formData.name)
    .set(`desc`, formData.description);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.put(this.rootUrl + '/hero/' + formData.id, body.toString(), { headers, observe: 'response' });
  }

  deleteHero(id: number) {
    return this.http.delete(this.rootUrl + '/hero/' + id);
  }
}
