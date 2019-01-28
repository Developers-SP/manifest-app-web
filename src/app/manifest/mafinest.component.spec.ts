import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MafinestComponent } from './mafinest.component';

describe('MafinestComponent', () => {
  let component: MafinestComponent;
  let fixture: ComponentFixture<MafinestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MafinestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MafinestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
