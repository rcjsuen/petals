/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

import { Game } from '../../providers/game';
import { Player } from '../../providers/player';

@Component({
    selector: 'page-playerSetup',
    templateUrl: 'playerSetup.html'
})

export class PlayerSetupPage {

    private players = [];

    constructor(private navCtrl: NavController, private game: Game) {
        for (let i = 1; i < game.getPlayerCount(); i++) {
            this.players.push(
                {
                    number: i + 1,
                    card1: "",
                    card2: "",
                    card3: "",
                    card4: "",
                    card5: ""
                }
            );
        }
    }

    public finish(): void {
        let deck = this.game.getDeck();
        for (let i = 0; i < this.players.length; i++) {
            if (!this.players[i].name) {
                this.players[i].name = "Player " + (i + 2);
            }
            let player = new Player(this.game, this.players[i].name);
            player.draw(deck.drawString(this.players[i].card1));
            player.draw(deck.drawString(this.players[i].card2));
            player.draw(deck.drawString(this.players[i].card3));
            player.draw(deck.drawString(this.players[i].card4));

            if (this.game.getPlayerCount() < 4) {
                // draw the fifth card if it's a two or three player game
                player.draw(deck.drawString(this.players[i].card5));
            }
            this.game.addPlayer(player);
        }
        this.navCtrl.setRoot(TabsPage);
    }

}
