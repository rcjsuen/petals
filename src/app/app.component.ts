import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { SetupPage } from '../pages/setup/setup';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = SetupPage;

  private players: number;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  public setPlayers(players: number): void {
    this.players = players;
  }

  public getPlayers(): number {
    return this.players;
  }
}
