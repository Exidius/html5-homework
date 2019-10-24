import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreadyComponent } from './notready.component';

describe('NotreadyComponent', () => {
  let component: NotreadyComponent;
  let fixture: ComponentFixture<NotreadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotreadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotreadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
