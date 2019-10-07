import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {ClientsRoutes} from './clients.routing';
import { ClientListComponent } from './client-list/client-list.component';
import {AgGridModule} from 'ag-grid-angular';
import { AddClientComponent } from './add-client/add-client.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClientsRoutes),
    AgGridModule.withComponents([]),
    ReactiveFormsModule,
    MatStepperModule,
    FormlyModule,
    NgbModule
  ],
  declarations: [ClientListComponent, AddClientComponent]
})
export class ClientsModule {}
