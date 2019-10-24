import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../shared/specie.service';
import { Specie } from '../shared/specie.model';

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.css']
})
export class SpecieListComponent implements OnInit {

  listItems = [];

  constructor(public service: SpecieService) { }

  ngOnInit() {
    this.service.getSpecieList();
  }

  populateForm(specie: Specie) {
    this.service.formData = Object.assign({}, specie);
  }

  onDelete(id: number) {
      if (confirm('Are you sure?')) {
            this.service.deleteSpecie(id).subscribe(res => {
        this.service.getSpecieList();
      });
    }
  }
}
