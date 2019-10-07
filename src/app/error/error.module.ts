import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ErrorRoutes } from './error.routing';
import { Error4Component } from './error4/error4.component';
import { Error5Component } from './error5/error5.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ErrorRoutes)],
  declarations: [Error4Component, Error5Component]
})
export class ErrorModule {}
