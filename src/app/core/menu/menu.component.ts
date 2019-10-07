import { Component } from '@angular/core';
import { MenuService } from './menu.service';

import { TranslateService } from '@ngx-translate/core';
/* tslint:disable:max-line-length */
@Component({
  selector: 'app-menu',
  template: `
  <ul class="navigation" appAccordion>
    <div *ngFor="let menuitem of menuService.getAll()">
      <li class="navigation-item" appAccordionLink group="{{menuitem.state}}" *ngIf="menuitem.type !== 'divider' || menuitem.type !== 'title'">
        <a class="navigation-link" appAccordionToggle [routerLink]="['/', menuitem.state]" *ngIf="menuitem.type === 'link'">
          <i [ngStyle]="{'color': menuitem.classes}" class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="navigation-link" appAccordionToggle href="{{menuitem.state}}" *ngIf="menuitem.type === 'extLink'">
          <i class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="navigation-link" appAccordionToggle href="{{menuitem.state}}" target="_blank" *ngIf="menuitem.type === 'extTabLink'">
          <i class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        </a>
        <a class="navigation-link" appAccordionToggle href="javascript:;" *ngIf="menuitem.type === 'sub'">
          <i class="icon {{ menuitem.icon }} mr-3"></i>
          <span class="title mr-auto">{{ menuitem.name | translate }}</span>
          <span class="badge badge-{{ badge.type }} mr-3" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
          <i class="menu-caret icon ion-ios-arrow-down"></i>
        </a>
        <ul class="navigation-submenu" *ngIf="menuitem.type === 'sub'">
          <li class="navigation-item" *ngFor="let childitem of menuitem.children" routerLinkActive="open">
            <a [routerLink]="['/', menuitem.state, childitem.state ]" class="navigation-link relative">{{ childitem.name | translate }}</a>
          </li>
        </ul>
      </li>
      <li class="navigation-item" *ngIf="menuitem.type === 'divider'">
        <hr/>
      </li>
      <li class="navigation-item" *ngIf="menuitem.type === 'title'">
        <span class="navigation-title">{{ menuitem.name | translate }}</span>
      </li>
    </div>
  </ul>`,
  providers: [MenuService]
})
export class MenuComponent {
  currentLang = 'en';

  constructor(
    public menuService: MenuService,
    public translate: TranslateService
  ) {}
}
