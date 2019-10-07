import { Component, NgZone, OnInit } from '@angular/core';
import { Message } from './message';
import { MailService } from './email.service';

const SMALL_WIDTH_BREAKPOINT = 991;

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [MailService]
})
export class EmailComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(
    `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`
  );

  messages: Message[];
  selectedMessage: Message;
  messageOpen = false;
  isOpened = true;
  _autoCollapseWidth = 991;

  constructor(private mailService: MailService, zone: NgZone) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => {
        this.mediaMatcher = mql;
      })
    );
  }

  ngOnInit(): void {
    if (this.isOver()) {
      this.isOpened = false;
    }
    this.getMessages();
  }

  toogleSidebar(): void {
    this.isOpened = !this.isOpened;
  }

  isOver(): boolean {
    return this.mediaMatcher.matches;
  }

  getInitials(name) {
    return name.match(/\b(\w)/g).join('');
  }

  getMessages(): void {
    this.mailService.getMessages().then(messages => {
      this.messages = messages;
      this.selectedMessage = this.messages[0];
    });
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
    if (this.isOver()) {
      this.isOpened = false;
    }
  }
}
