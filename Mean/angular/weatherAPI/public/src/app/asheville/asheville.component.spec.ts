import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AshevilleComponent } from './asheville.component';

describe('AshevilleComponent', () => {
  let component: AshevilleComponent;
  let fixture: ComponentFixture<AshevilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AshevilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AshevilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
