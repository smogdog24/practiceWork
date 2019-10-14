import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortlandComponent } from './portland.component';

describe('PortlandComponent', () => {
  let component: PortlandComponent;
  let fixture: ComponentFixture<PortlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
