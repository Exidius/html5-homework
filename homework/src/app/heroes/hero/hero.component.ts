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
      Id: null,
      Name: '',
      Description: ''
    };
  }

  onSubmit(form: NgForm) {

  }

  insertRecord(form: NgForm) {
    this.service.postHero(form.value).subscribe(res => {this.resetForm(form); });
  }
}
