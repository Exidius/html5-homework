import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private service: HeroService) { }

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
    if (form.value.id === '') {
    this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    console.log('insertrecord');
    this.service.postHero(form.value).subscribe(res => {this.resetForm(form); });
  }

  updateRecord(form: NgForm) {
    console.log('updaterecord');
    this.service.putHero(form.value).subscribe(res => {this.resetForm(form); });
  }
}
