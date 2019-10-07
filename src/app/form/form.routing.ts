import { Routes } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { MasksComponent } from './masks/masks.component';
import { ValidationComponent } from './validation/validation.component';
import { UploadComponent } from './upload/upload.component';

export const FormRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        data: {
          heading: 'Basic forms'
        }
      },
      {
        path: 'masks',
        component: MasksComponent,
        data: {
          heading: 'Masks'
        }
      },
      {
        path: 'validation',
        component: ValidationComponent,
        data: {
          heading: 'Validation'
        }
      },
      {
        path: 'upload',
        component: UploadComponent,
        data: {
          heading: 'Upload'
        }
      }
    ]
  }
];
