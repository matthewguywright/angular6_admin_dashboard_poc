import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule } from '@angular/material';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import {
  MenuComponent,
  HeaderComponent,
  SidebarComponent,
  FooterComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './core';

import {FormlyBootstrapModule, FormlyFieldInput} from '@ngx-formly/bootstrap';
import {FormlyModule} from '@ngx-formly/core';
import {ToastrModule} from 'ngx-toastr';
import { ConfirmDialogComponent } from './modal/confirm-dialog/confirm-dialog.component';
import {CurrencyFieldInputComponent} from './formly-types/currency/currency.formly';
import {NgxCurrencyModule} from 'ngx-currency';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const customCurrencyMaskConfig = {
  align: 'right',
  allowNegative: true,
  allowZero: true,
  decimal: '.',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: ',',
  nullable: false
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    ConfirmDialogComponent,
    CurrencyFieldInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    LoadingBarRouterModule,
    NgbModule,
    MatSidenavModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'currency', component: CurrencyFieldInputComponent }
      ]
    }),
    FormlyBootstrapModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      newestOnTop: true,
      autoDismiss: true,
      maxOpened: 3
    })
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
