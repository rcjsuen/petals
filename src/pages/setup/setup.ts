/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlayerSetupPage } from '../playerSetup/playerSetup';

import { Game } from '../../providers/game';

@Component({
    selector: 'page-home',
    templateUrl: 'setup.html'
})

export class SetupPage {

    private players: number;

    constructor(private navCtrl: NavController, private game: Game) {
    }

    public start(): void {
        this.game.setPlayerCount(this.players);
        this.game.start();
        this.navCtrl.setRoot(PlayerSetupPage);
    }

    public checkForm(): boolean {
        return this.players !== undefined;
    }

}
