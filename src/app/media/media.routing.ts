import { Routes } from '@angular/router';

import { GridComponent } from './grid/grid.component';
import { TileComponent } from './tile/tile.component';

export const MediaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'grid',
        component: GridComponent,
        data: {
          heading: 'Media Grid'
        }
      },
      {
        path: 'tile',
        component: TileComponent,
        data: {
          heading: 'Media Tiles'
        }
      }
    ]
  }
];
