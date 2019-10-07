import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ACCORDION_DIRECTIVES } from "./accordion";
import { ALERT_DIRECTIVES } from "./alert";
import { BUTTONS_DIRECTIVES } from "./buttons";
import { CAROUSEL_DIRECTIVES } from "./carousel";
import { COLLAPSE_DIRECTIVES } from "./collapse";
import { DATEPICKER_DIRECTIVES } from "./datepicker";
import { DROPDOWN_DIRECTIVES } from "./dropdown";
import { MODAL_DIRECTIVES, NgbdModalContent } from "./modal";
import { PAGINATION_DIRECTIVES } from "./pagination";
import { POPOVER_DIRECTIVES } from "./popover";
import { PROGRESSBAR_DIRECTIVES } from "./progressbar";
import { RATING_DIRECTIVES } from "./rating";
import { TABSET_DIRECTIVES } from "./tabset";
import { TIMEPICKER_DIRECTIVES } from "./timepicker";
import { TOOLTIP_DIRECTIVES } from "./tooltip";
import { TYPEAHEAD_DIRECTIVES } from "./typeahead";

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [
    ...ACCORDION_DIRECTIVES,
    ...ALERT_DIRECTIVES,
    ...BUTTONS_DIRECTIVES,
    ...CAROUSEL_DIRECTIVES,
    ...COLLAPSE_DIRECTIVES,
    ...DATEPICKER_DIRECTIVES,
    ...DATEPICKER_DIRECTIVES,
    ...DROPDOWN_DIRECTIVES,
    ...MODAL_DIRECTIVES,
    ...PAGINATION_DIRECTIVES,
    ...POPOVER_DIRECTIVES,
    ...PROGRESSBAR_DIRECTIVES,
    ...RATING_DIRECTIVES,
    ...TABSET_DIRECTIVES,
    ...TIMEPICKER_DIRECTIVES,
    ...TOOLTIP_DIRECTIVES,
    ...TYPEAHEAD_DIRECTIVES
  ],
  declarations: [
    ...ACCORDION_DIRECTIVES,
    ...ALERT_DIRECTIVES,
    ...BUTTONS_DIRECTIVES,
    ...CAROUSEL_DIRECTIVES,
    ...COLLAPSE_DIRECTIVES,
    ...DATEPICKER_DIRECTIVES,
    ...DATEPICKER_DIRECTIVES,
    ...DROPDOWN_DIRECTIVES,
    ...MODAL_DIRECTIVES,
    ...PAGINATION_DIRECTIVES,
    ...POPOVER_DIRECTIVES,
    ...PROGRESSBAR_DIRECTIVES,
    ...RATING_DIRECTIVES,
    ...TABSET_DIRECTIVES,
    ...TIMEPICKER_DIRECTIVES,
    ...TOOLTIP_DIRECTIVES,
    ...TYPEAHEAD_DIRECTIVES,
    NgbdModalContent
  ],
  entryComponents: [NgbdModalContent]
})
export class NgbdDemoModule {}
