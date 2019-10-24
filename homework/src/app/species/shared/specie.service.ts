import { Injectable } from '@angular/core';
import { Specie } from './specie.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  formData: Specie;
  list: Specie[];
  readonly rootUrl = 'http://81.2.241.234:8080';

  constructor(private http: HttpClient) { }

  postSpecie(formData: Specie) {
    const body = new HttpParams()
    .set(`name`, formData.name)
    .set(`desc`, formData.description);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post(this.rootUrl + '/species', body.toString(), { headers, observe: 'response' });
  }

  getSpecieList() {
    this.http.get(this.rootUrl + '/species?count=0').toPromise().then(res => this.list = res as Specie[]);
  }

  putSpecie(formData: Specie) {
    const body = new HttpParams()
    .set(`name`, formData.name)
    .set(`desc`, formData.description);
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.put(this.rootUrl + '/species/' + formData.id, body.toString(), { headers, observe: 'response' });
  }

  deleteSpecie(id: number) {
    return this.http.delete(this.rootUrl + '/species/' + id);
  }
}
