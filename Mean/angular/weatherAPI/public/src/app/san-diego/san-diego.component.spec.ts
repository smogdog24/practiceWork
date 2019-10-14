import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanDiegoComponent } from './san-diego.component';

describe('SanDiegoComponent', () => {
  let component: SanDiegoComponent;
  let fixture: ComponentFixture<SanDiegoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanDiegoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanDiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
