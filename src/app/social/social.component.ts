import { Component } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent {
  images: any[] = [];
  num = 1;

  constructor() {
    for (this.num; this.num <= 20; this.num += 1) {
      this.images.push(this.num);
    }
  }
}
