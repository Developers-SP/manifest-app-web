import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddClassOnDirective } from './directives/add-class-on/add-class-on.directive';
import { TableManifestComponent } from './components/table-manifest/table-manifest.component';
import { NewTakeOffComponent } from './components/new-takeoff/new-takeoff.component';
@NgModule({
  declarations: [
    NewTakeOffComponent,
    AddClassOnDirective,
    TableManifestComponent,
  ],
  exports: [
    NewTakeOffComponent,
    AddClassOnDirective,
    TableManifestComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
