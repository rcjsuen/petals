/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game, Color } from '../../providers/game';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { Card } from '../../providers/card';

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
            let precheck = this.shouldPrecheck(card);
            let model = {
                label: card.toString(),
                checked: precheck,
                disabled: precheck || this.shouldDisable(card)
            }
            this.cards.push(model);
        }
    }

    private shouldPrecheck(card: Card): boolean {
        let color = card.getColor();
        let value = card.getNumber();
        return (this.blue && color === Color.BLUE) ||
            (this.green && color === Color.GREEN) ||
            (this.red && color === Color.RED) ||
            (this.white && color === Color.WHITE) ||
            (this.yellow && color === Color.YELLOW) ||
            (this.one && value === 1) ||
            (this.two && value === 2) ||
            (this.three && value === 3) ||
            (this.four && value === 4) ||
            (this.five && value === 5);
    }

    private shouldDisable(card: Card): boolean {
        let colors = card.getColors();
        let numbers = card.getNumbers();
        return (this.blue && colors.indexOf(Color.BLUE) === -1) ||
            (this.green && colors.indexOf(Color.GREEN) === -1) ||
            (this.red && colors.indexOf(Color.RED) === -1) ||
            (this.white && colors.indexOf(Color.WHITE) === -1) ||
            (this.yellow && colors.indexOf(Color.YELLOW) === -1) ||
            (this.one && numbers.indexOf(1) === -1) ||
            (this.two && numbers.indexOf(2) === -1) ||
            (this.three && numbers.indexOf(3) === -1) ||
            (this.four && numbers.indexOf(4) === -1) ||
            (this.five && numbers.indexOf(5) === -1);
    }

    public canHint(): boolean {
        for (let card of this.cards) {
            if (card.checked) {
                return true;
            }
        }
        return false;
    }

    public hint(): void {
        let hand = this.game.getHand();
        let cards = hand.getCards();
        for (let i = 0; i < this.cards.length; i++) {
            if (this.blue) {
                cards[i].setBlue(this.cards[i].checked);
            } else if (this.green) {
                cards[i].setGreen(this.cards[i].checked);
            } else if (this.red) {
                cards[i].setRed(this.cards[i].checked);
            } else if (this.white) {
                cards[i].setWhite(this.cards[i].checked);
            } else if (this.yellow) {
                cards[i].setYellow(this.cards[i].checked);
            } else if (this.one) {
                cards[i].setOne(this.cards[i].checked);
            } else if (this.two) {
                cards[i].setTwo(this.cards[i].checked);
            } else if (this.three) {
                cards[i].setThree(this.cards[i].checked);
            } else if (this.four) {
                cards[i].setFour(this.cards[i].checked);
            } else if (this.five) {
                cards[i].setFive(this.cards[i].checked);
            }
        }
        hand.update();
        this.navCtrl.pop();
    }

}
