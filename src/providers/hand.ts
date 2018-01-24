/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Game, Color } from "./game";
import { UnknownCard } from "./unknownCard";

export class Hand {

    private cards: UnknownCard[] = [];

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

    private remove(card: UnknownCard) {
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
        this.cards.push(new UnknownCard(this.game.getDeck()));
    }

    public play(card: UnknownCard, color: Color, value: number): void {
        this.game.play(this.game.getDeck().drawCard(color, value));
        this.remove(card);
    }

    public discard(card: UnknownCard, color: Color, value: number): void {
        this.game.discard(this.game.getDeck().drawCard(card.getColor(), card.getNumber()));
        this.remove(card);
    }

    public update(): void {
        for (let card of this.cards) {
            card.update();
        }
    }

    public getCards(): UnknownCard[] {
        return this.cards;
    }
}