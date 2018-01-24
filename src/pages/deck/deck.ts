/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game } from '../../providers/game';
import { Deck } from '../../providers/deck';

@Component({
    selector: 'page-deck',
    templateUrl: 'deck.html'
})
export class DeckPage {

    private deck: Deck;

    constructor(public navCtrl: NavController, public game: Game) {
        this.deck = game.getDeck();
    }

}
