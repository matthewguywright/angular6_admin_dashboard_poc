import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './core';
import { AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'email',
        loadChildren: './email/email.module#EmailModule'
      },
      {
        path: 'clients',
        loadChildren: './clients/clients.module#ClientsModule'
      },
      {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'cards',
        loadChildren: './cards/cards.module#CardsModule'
      },
      {
        path: 'forms',
        loadChildren: './form/form.module#FormModule'
      },
      {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
      },
      {
        path: 'datatable',
        loadChildren: './datatable/datatable.module#DatatableModule'
      },
      {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
      },
      {
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
      },
      {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      },
      {
        path: 'taskboard',
        loadChildren: './taskboard/taskboard.module#TaskboardModule'
      },
      {
        path: 'calendar',
        loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
      },
      {
        path: 'media',
        loadChildren: './media/media.module#MediaModule'
      },
      {
        path: 'social',
        loadChildren: './social/social.module#SocialModule'
      },
      {
        path: 'docs',
        loadChildren: './docs/docs.module#DocsModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: 'error',
        loadChildren: './error/error.module#ErrorModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
