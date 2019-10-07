import { Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { DraggableComponent } from './draggable/draggable.component';

export const CardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        data: {
          heading: 'Basic card'
        }
      },
      {
        path: 'draggable',
        component: DraggableComponent,
        data: {
          heading: 'Draggable'
        }
      }
    ]
  }
];
