import { Component, OnInit } from '@angular/core';
import { SpecieService } from '../shared/specie.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.css']
})
export class SpecieComponent implements OnInit {

  constructor(public service: SpecieService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id: '',
      name: '',
      description: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id === '' || form.value.id == null) {
    this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postSpecie(form.value).subscribe(res => {this.resetForm(form); this.service.getSpecieList(); });
  }

  updateRecord(form: NgForm) {
    this.service.putSpecie(form.value).subscribe(res => {this.resetForm(form); this.service.getSpecieList(); });
  }
}
