/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game } from '../../providers/game';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
    selector: 'page-hint',
    templateUrl: 'hint.html'
})

export class HintPage {

    private blue: boolean = false;
    private green: boolean = false;
    private red: boolean = false;
    private white: boolean = false;
    private yellow: boolean = false;

    private one: boolean = false;
    private two: boolean = false;
    private three = false;
    private four = false;
    private five = false;

    private cards: any[] = [];

    constructor(private navCtrl: NavController, navParams: NavParams, private game: Game) {
        let hint = navParams.get('hint');
        this.blue = hint === 'B';
        this.green = hint === 'G';
        this.red = hint === 'R';
        this.white = hint === 'W';
        this.yellow = hint === 'Y';
        this.one = hint === '1';
        this.two = hint === '2';
        this.three = hint === '3';
        this.four = hint === '4';
        this.five = hint === '5';

        for (let card of this.game.getHand().getCards()) {
            let model = {
                label: card.toString(),
                checked: false
            }
            this.cards.push(model);
        }
    }

    public hint(): void {
        let hand = this.game.getHand().getCards();
        for (let i = 0; i < this.cards.length; i++) {
            if (this.blue) {
                hand[i].setBlue(this.cards[i].checked);
            } else if (this.green) {
                hand[i].setGreen(this.cards[i].checked);
            } else if (this.red) {
                hand[i].setRed(this.cards[i].checked);
            } else if (this.white) {
                hand[i].setWhite(this.cards[i].checked);
            } else if (this.yellow) {
                hand[i].setYellow(this.cards[i].checked);
            } else if (this.one) {
                hand[i].setOne(this.cards[i].checked);
            } else if (this.two) {
                hand[i].setTwo(this.cards[i].checked);
            } else if (this.three) {
                hand[i].setThree(this.cards[i].checked);
            } else if (this.four) {
                hand[i].setFour(this.cards[i].checked);
            } else if (this.five) {
                hand[i].setFive(this.cards[i].checked);
            }
            hand[i].update();
        }
        this.navCtrl.pop();
    }

}
