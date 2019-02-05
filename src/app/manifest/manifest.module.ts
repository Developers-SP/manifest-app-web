import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { ManifestRoutingModule } from './manifest-routing.module';

import { ManifestComponent } from './manifest.component';
import { ManifestHeaderComponent } from './components/manifest-header/manifest-header.component';

@NgModule({
  declarations: [
    ManifestComponent,
    ManifestHeaderComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule,
    ManifestRoutingModule,
    SharedModule.forRoot()
  ],
  exports: [
    ManifestComponent
  ],
  bootstrap: [
    ManifestComponent
  ]
})
export class ManifestModule { }
