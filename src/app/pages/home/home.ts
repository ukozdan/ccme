import { Component, ViewEncapsulation } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../home-popover/home-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss'],
})
export class HomePage {
  conferenceDate = '2047-05-17';

  constructor(public popoverCtrl: PopoverController) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
