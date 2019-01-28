import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { ManifestRoutingModule } from './manifest-routing.module';

import { MafinestComponent } from './mafinest.component';
import { ManifestHeaderComponent } from './components/manifest-header/manifest-header.component';

@NgModule({
  declarations: [
    MafinestComponent,
    ManifestHeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ManifestRoutingModule,
    SharedModule.forRoot()
  ],
  exports: [
    MafinestComponent
  ],
  bootstrap: [
    MafinestComponent
  ]
})
export class ManifestModule { }
