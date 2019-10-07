import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PagesRoutes } from './pages.routing';
import { InvoiceComponent } from './invoice/invoice.component';
import { TimelineComponent } from './timeline/timeline.component';
import { PricingComponent } from './pricing/pricing.component';
import { ForumComponent } from './forum/forum.component';
import { ActivityComponent } from './activity/activity.component';
import { BlankComponent } from './blank/blank.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    NgxDatatableModule
  ],
  declarations: [
    InvoiceComponent,
    TimelineComponent,
    PricingComponent,
    ForumComponent,
    ActivityComponent,
    BlankComponent
  ]
})
export class PagesModule {}
