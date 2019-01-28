import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManifestHeaderComponent } from './manifest-header.component';

describe('ManifestHeaderComponent', () => {
  let component: ManifestHeaderComponent;
  let fixture: ComponentFixture<ManifestHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManifestHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManifestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
