import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CoreModule } from '@core/core.module';
import { ThemeModule } from '@theme/theme.module';
import { SharedModule } from '@shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { FormlyConfigModule } from './formly-config.module';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { environment } from '@env/environment';
import { appInitializerProviders, BASE_URL, httpInterceptorProviders } from '@core';
import { LoginService } from '@core/authentication/login.service';
import { FakeLoginService } from './fake-login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Required for AOT compilation
export function TranslateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    ThemeModule,
    RoutesModule,
    SharedModule,
    FormlyConfigModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: BASE_URL, useValue: environment.baseUrl },
    { provide: LoginService, useClass: FakeLoginService }, // <= Remove it in the real APP
    httpInterceptorProviders,
    appInitializerProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
