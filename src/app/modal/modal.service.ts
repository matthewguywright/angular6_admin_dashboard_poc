import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, from, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  ConfirmDialogComponent
} from './confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private ngbModal: NgbModal) { }

  confirm(
    prompt = 'Really?', title = 'Confirm'
  ): Observable<boolean> {
    const modal = this.ngbModal.open(
      ConfirmDialogComponent, { backdrop: 'static', centered: true });

    modal.componentInstance.prompt = prompt;
    modal.componentInstance.title = title;

    return from(modal.result).pipe(
      catchError(error => {
        console.warn(error);
        return of(undefined);
      })
    );
  }
}
