import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';


import { TranslateLoaderArguments } from './shared/translate/translate-loader.module';
import { ManifestModule } from './manifest/manifest.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Mock } from './shared/services/mock/mock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'manifest-app' }),
    TranslateModule.forRoot(TranslateLoaderArguments),
    HttpClientModule,
    AppRoutingModule,
    ManifestModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Mock,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    @Inject(APP_ID) appId: string
  ) {
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
