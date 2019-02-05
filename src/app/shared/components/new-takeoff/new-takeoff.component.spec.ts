import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTakeOffComponent } from './new-takeoff.component';

describe('NewTakeOffComponent', () => {
  let component: NewTakeOffComponent;
  let fixture: ComponentFixture<NewTakeOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTakeOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTakeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
