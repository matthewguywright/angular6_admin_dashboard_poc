import { NgbdDatepickerAdapter } from './adapter/datepicker-adapter';
import { NgbdDatepickerBasic } from './basic/datepicker-basic';
import { NgbdDatepickerConfig } from './config/datepicker-config';
import { NgbdDatepickerI18n } from './i18n/datepicker-i18n';
import { NgbdDatepickerDisabled } from './disabled/datepicker-disabled';
import { NgbdDatepickerPopup } from './popup/datepicker-popup';
import { NgbdDatepickerCustomday } from './customday/datepicker-customday';
import { NgbdDatepickerMultiple } from './multiple/datepicker-multiple';
import {
  NgbdDatepickerCalendars,
  NgbdIslamicCivil,
  NgbdIslamicUmalqura
} from './calendars/datepicker-calendars';
import { NgbdDatepickerRange } from './range/datepicker-range';
import { NgbdDatepickerHebrew } from './hebrew/datepicker-hebrew';
import { NgbdDatepickerJalali } from './jalali/datepicker-jalali';

export const DATEPICKER_DIRECTIVES = [
  NgbdDatepickerBasic,
  NgbdDatepickerPopup,
  NgbdDatepickerDisabled,
  NgbdDatepickerI18n,
  NgbdDatepickerCustomday,
  NgbdDatepickerConfig,
  NgbdDatepickerMultiple,
  NgbdDatepickerCalendars,
  NgbdDatepickerRange,
  NgbdIslamicCivil,
  NgbdIslamicUmalqura,
  NgbdDatepickerAdapter,
  NgbdDatepickerHebrew,
  NgbdDatepickerJalali
];
