import { Routes } from '@angular/router';
import {ClientListComponent} from './client-list/client-list.component';
import {AddClientComponent} from './add-client/add-client.component';

export const ClientsRoutes: Routes = [
  {
    path: '',
    component: ClientListComponent,
    data: {
      heading: 'Client List'
    }
  },
  {
    path: 'client-list',
    component: ClientListComponent,
    data: {
      heading: 'Client List'
    }
  },
  {
    path: 'add-client',
    component: AddClientComponent,
    data: {
      heading: 'Add Client'
    }
  }
];
