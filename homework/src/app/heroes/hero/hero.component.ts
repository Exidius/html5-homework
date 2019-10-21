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
      console.log('resetForm - form != null');
    }
    console.log('formData = \'\'');
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
    this.service.postHero(form.value).subscribe(res => {this.resetForm(form); this.service.getHeroList(); });
  }

  updateRecord(form: NgForm) {
    this.service.putHero(form.value).subscribe(res => {this.resetForm(form); this.service.getHeroList(); });
  }
}
