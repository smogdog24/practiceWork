import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrleansComponent } from './new-orleans.component';

describe('NewOrleansComponent', () => {
  let component: NewOrleansComponent;
  let fixture: ComponentFixture<NewOrleansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrleansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrleansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
