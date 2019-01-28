import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ActiveOnDirective } from './directives/active-on.directive';

@NgModule({
  declarations: [
    ActiveOnDirective
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
