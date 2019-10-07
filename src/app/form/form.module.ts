import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { FormRoutes } from './form.routing';
import { BasicComponent } from './basic/basic.component';
import { MasksComponent } from './masks/masks.component';
import { ValidationComponent } from './validation/validation.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    CustomFormsModule,
    TextMaskModule,
    FileUploadModule
  ],
  declarations: [
    BasicComponent,
    MasksComponent,
    ValidationComponent,
    UploadComponent
  ]
})
export class FormModule {}
