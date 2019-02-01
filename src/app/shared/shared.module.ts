import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ActiveOnDirective } from './directives/active-on.directive';
import { TableManifestComponent } from './components/table-manifest/table-manifest.component';

@NgModule({
  declarations: [
    ActiveOnDirective,
    TableManifestComponent
  ],
  exports: [
    ActiveOnDirective
  ],
  imports: [
    CommonModule,
    TranslateModule,
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
