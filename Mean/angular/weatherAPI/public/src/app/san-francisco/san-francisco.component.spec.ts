import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanFranciscoComponent } from './san-francisco.component';

describe('SanFranciscoComponent', () => {
  let component: SanFranciscoComponent;
  let fixture: ComponentFixture<SanFranciscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanFranciscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanFranciscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
