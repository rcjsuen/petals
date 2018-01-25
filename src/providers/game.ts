/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Deck } from "./deck";
import { Player } from "./player";
import { Card } from "./card";
import { Hand } from "./hand";

export enum Color {
    BLUE,
    GREEN,
    RED,
    WHITE,
    YELLOW
}

export class Game {

    private playerCount: number;
    private players: Player[] = [];

    private deck: Deck;
    private hand: Hand;
    private played: Card[] = [];
    private discarded: Card[] = [];

    public start(): void {
        this.deck = new Deck();
        this.hand = new Hand(this);
    }

    private contains(cards: Card[], color: Color, value: number) {
        for (let card of cards) {
            if (card.is(color, value)) {
                return true;
            }
        }
        return false;
    }

    public canPlay(color: Color, value: number): boolean {
        if (value === 1) {
            for (let card of this.played) {
                if (card.getColor() === color) {
                    return false;
                }
            }
            return true;
        }
        for (let card of this.played) {
            if (card.getColor() === color && card.getNumber() === value - 1) {
                return true;
            }
        }
        return false;
    }

    public play(card: Card) {
        this.played.push(card);
    }

    public discard(card: Card) {
        this.discarded.push(card);
    }

    public isCardSafe(color: Color, value: number) {
        if (value === 5) {
            return false;
        }
        return this.contains(this.played, color, value);
    }

    public addPlayer(player: Player): void {
        this.players.push(player);
    }

    public getPlayers(): Player[] {
        return this.players;
    }

    public setPlayerCount(players: number): void {
        this.playerCount = players;
    }

    public getPlayerCount(): number {
        return this.playerCount;
    }

    public getDeck(): Deck {
        return this.deck;
    }

    public getHand(): Hand {
        return this.hand;
    }
}
