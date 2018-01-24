/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Card } from "./card";
import { Game, Color } from "./game";

export class Player {

    private cards: Card[] = [];

    constructor(private game: Game, private name: string) {
    }

    public reorder(from: number, to: number) {
        let card = this.cards[from];
        this.cards.splice(from, 1);
        this.cards.splice(to, 0, card);
    }

    public draw(card: Card): void {
        this.cards.push(card);
    }

    public drawFromDeck(color: Color, value: number): void {
        this.cards.push(this.game.getDeck().drawCard(color, value));
    }

    public play(card: Card): void {
        this.game.play(card);
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
    }

    public discard(card: Card): void {
        this.game.discard(card);
        let index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
    }
}
