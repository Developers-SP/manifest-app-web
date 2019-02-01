import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableManifestComponent } from './table-manifest.component';

describe('TableManifestComponent', () => {
  let component: TableManifestComponent;
  let fixture: ComponentFixture<TableManifestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableManifestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableManifestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
