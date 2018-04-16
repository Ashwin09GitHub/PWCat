import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpensComponent } from './create-expens.component';

describe('CreateExpensComponent', () => {
  let component: CreateExpensComponent;
  let fixture: ComponentFixture<CreateExpensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExpensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
