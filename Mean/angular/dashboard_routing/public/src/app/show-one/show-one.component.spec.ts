import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneComponent } from './show-one.component';

describe('ShowOneComponent', () => {
  let component: ShowOneComponent;
  let fixture: ComponentFixture<ShowOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
