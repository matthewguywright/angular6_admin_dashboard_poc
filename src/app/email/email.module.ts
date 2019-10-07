import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { EmailComponent } from './email.component';
import { EmailRoutes } from './email.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EmailRoutes),
    NgbTooltipModule,
    MatSidenavModule
  ],
  declarations: [EmailComponent]
})
export class EmailModule {}
