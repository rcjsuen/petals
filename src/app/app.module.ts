import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HandsPage } from '../pages/hands/hands';
import { DeckPage } from '../pages/deck/deck';
import { SetupPage } from '../pages/setup/setup';
import { TabsPage } from '../pages/tabs/tabs';
import { PlayerSetupPage } from '../pages/playerSetup/playerSetup';
import { HintPage } from '../pages/hint/hint';

import { Game } from '../providers/game';

@NgModule({
  declarations: [
    MyApp,
    HandsPage,
    DeckPage,
    HintPage,
    SetupPage,
    PlayerSetupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HandsPage,
    DeckPage,
    HintPage,
    SetupPage,
    PlayerSetupPage,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Game
  ]
})
export class AppModule {}
