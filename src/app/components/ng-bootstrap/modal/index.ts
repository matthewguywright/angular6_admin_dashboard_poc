import { NgbdModalBasic } from './basic/modal-basic';
import {
  NgbdModalComponent,
  NgbdModalContent
} from './component/modal-component';
import { NgbdModalCustomclassComponent } from './customclass/modal-customclass';
import { NgbdModalConfig } from './config/modal-config';
import { NgbdModalOptions } from './options/modal-options';
import {
  NgbdModal1Content,
  NgbdModal2Content,
  NgbdModalStacked
} from './stacked/modal-stacked';

export const MODAL_DIRECTIVES = [
  NgbdModalBasic,
  NgbdModalComponent,
  NgbdModalCustomclassComponent,
  NgbdModalConfig,
  NgbdModalOptions,
  NgbdModalStacked,
  NgbdModal1Content,
  NgbdModal2Content
];
export { NgbdModalContent } from './component/modal-component';
