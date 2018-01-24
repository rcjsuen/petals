/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Game, Color } from "./game";
import { UnknownCard } from "./unknownCard";
import { Card } from "./card";

export class Hand {

    private cards: Card[] = [];

    constructor(private game: Game) {
        const deck = game.getDeck();
        this.cards.push(new UnknownCard(deck));
        this.cards.push(new UnknownCard(deck));
        this.cards.push(new UnknownCard(deck));
        this.cards.push(new UnknownCard(deck));
        if (game.getPlayerCount() < 4) {
            this.cards.push(new UnknownCard(deck));
        }
    }

    public reorder(from: number, to: number) {
        let card = this.cards[from];
        this.cards.splice(from, 1);
        this.cards.splice(to, 0, card);
    }

    private remove(card: Card): number {
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
        return index;
    }

    private replace(card: Card, replacement: Card) {
        this.remove(card);
        this.cards.push(replacement);
    }

    public play(card: Card, color: Color, value: number): void {
        if (card instanceof UnknownCard) {
            this.game.play(this.game.getDeck().drawCard(color, value));
        } else {
            this.game.play(card);
        }
        this.replace(card, new UnknownCard(this.game.getDeck()));
    }

    public discard(card: Card, color: Color, value: number): void {
        if (card instanceof UnknownCard) {
            this.game.discard(this.game.getDeck().drawCard(color, value));
        } else {
            this.game.discard(card);
        }
        this.replace(card, new UnknownCard(this.game.getDeck()));
    }

    public update(): void {
        for (let card of this.cards) {
            card.update();

            if (card.isColorConfirmed() && card.isNumberConfirmed()) {
                // swap it with an actual card
                let knownCard = this.game.getDeck().drawCard(card.getColor(), card.getNumber());
                this.cards.splice(this.remove(card), 0, knownCard);
            }
        }

        for (let card of this.cards) {
            card.update();
        }
    }

    public getCards(): Card[] {
        return this.cards;
    }
}