import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  options = {
    lang: 'en',
    theme: 'winter',
    settings: false,
    docked: false,
    boxed: false,
    opened: false
  };

  @Output()
  messageEvent = new EventEmitter<Object>();
  @Output()
  toggleFullscreen = new EventEmitter<void>();
  @Output()
  openSideMenu = new EventEmitter<void>();

  constructor(public translate: TranslateService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  toggleSideBar() {
    this.options.docked = !this.options.docked;
  }

  sendMessage() {
    this.messageEvent.emit(this.options);
  }

  setTheme(theme) {
    this.options.theme = theme;
    this.sendMessage();
  }
}
