/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Color } from "./game";
import { Card } from "./card";

export class Deck {

    private cards: Card[] = [];

    constructor() {
        this.cards.push(new Card(Color.BLUE, 1));
        this.cards.push(new Card(Color.BLUE, 1));
        this.cards.push(new Card(Color.BLUE, 1));
        this.cards.push(new Card(Color.BLUE, 2));
        this.cards.push(new Card(Color.BLUE, 2));
        this.cards.push(new Card(Color.BLUE, 3));
        this.cards.push(new Card(Color.BLUE, 3));
        this.cards.push(new Card(Color.BLUE, 4));
        this.cards.push(new Card(Color.BLUE, 4));
        this.cards.push(new Card(Color.BLUE, 5));

        this.cards.push(new Card(Color.GREEN, 1));
        this.cards.push(new Card(Color.GREEN, 1));
        this.cards.push(new Card(Color.GREEN, 1));
        this.cards.push(new Card(Color.GREEN, 2));
        this.cards.push(new Card(Color.GREEN, 2));
        this.cards.push(new Card(Color.GREEN, 3));
        this.cards.push(new Card(Color.GREEN, 3));
        this.cards.push(new Card(Color.GREEN, 4));
        this.cards.push(new Card(Color.GREEN, 4));
        this.cards.push(new Card(Color.GREEN, 5));

        this.cards.push(new Card(Color.RED, 1));
        this.cards.push(new Card(Color.RED, 1));
        this.cards.push(new Card(Color.RED, 1));
        this.cards.push(new Card(Color.RED, 2));
        this.cards.push(new Card(Color.RED, 2));
        this.cards.push(new Card(Color.RED, 3));
        this.cards.push(new Card(Color.RED, 3));
        this.cards.push(new Card(Color.RED, 4));
        this.cards.push(new Card(Color.RED, 4));
        this.cards.push(new Card(Color.RED, 5));

        this.cards.push(new Card(Color.WHITE, 1));
        this.cards.push(new Card(Color.WHITE, 1));
        this.cards.push(new Card(Color.WHITE, 1));
        this.cards.push(new Card(Color.WHITE, 2));
        this.cards.push(new Card(Color.WHITE, 2));
        this.cards.push(new Card(Color.WHITE, 3));
        this.cards.push(new Card(Color.WHITE, 3));
        this.cards.push(new Card(Color.WHITE, 4));
        this.cards.push(new Card(Color.WHITE, 4));
        this.cards.push(new Card(Color.WHITE, 5));

        this.cards.push(new Card(Color.YELLOW, 1));
        this.cards.push(new Card(Color.YELLOW, 1));
        this.cards.push(new Card(Color.YELLOW, 1));
        this.cards.push(new Card(Color.YELLOW, 2));
        this.cards.push(new Card(Color.YELLOW, 2));
        this.cards.push(new Card(Color.YELLOW, 3));
        this.cards.push(new Card(Color.YELLOW, 3));
        this.cards.push(new Card(Color.YELLOW, 4));
        this.cards.push(new Card(Color.YELLOW, 4));
        this.cards.push(new Card(Color.YELLOW, 5));
    }

    public drawString(card: string): Card {
        switch (card.charAt(0)) {
            case 'B':
                return this.drawCard(Color.BLUE, parseInt(card.charAt(1)));
            case 'G':
                return this.drawCard(Color.GREEN, parseInt(card.charAt(1)));
            case 'R':
                return this.drawCard(Color.RED, parseInt(card.charAt(1)));
            case 'W':
                return this.drawCard(Color.WHITE, parseInt(card.charAt(1)));
            case 'Y':
                return this.drawCard(Color.YELLOW, parseInt(card.charAt(1)));
        }
        return null;
    }

    public drawCard(color: Color, value: number): Card {
        for (let i = 0; i < this.cards.length; i++) {
            if (this.cards[i].is(color, value)) {
                let card = this.cards[i];
                this.cards.splice(i, 1);
                return card;
            }
        }
        return null;
    }

    public hasColor(color: Color): boolean {
        for (let card of this.cards) {
            if (card.getColor() === color) {
                return true;
            }
        }
        return false;
    }

    public hasNumber(value: number): boolean {
        for (let card of this.cards) {
            if (card.getNumber() === value) {
                return true;
            }
        }
        return false;
    }

}
