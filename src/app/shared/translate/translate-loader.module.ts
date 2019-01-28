
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export const LoaderFunction = (http: HttpClient) => new TranslateHttpLoader(http, './i18n/', '.json');

export const TranslateLoaderArguments = {
  loader: {
    useFactory: LoaderFunction,
    provide: TranslateLoader,
    deps: [HttpClient]
  }
};
