/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Color } from './game';
import { Card } from './card';

export class KnownCard implements Card {

    private color: Color;
    private value: number;
    private label;

    constructor(color: Color, value: number) {
        this.color = color;
        this.value = value;
        this.label = this.toShortString();
    }

    public toShortString(): string {
        switch (this.color) {
            case Color.BLUE:
                return "B " + this.value;
            case Color.GREEN:
                return "G " + this.value;
            case Color.RED:
                return "R " + this.value;
            case Color.WHITE:
                return "W " + this.value;
            case Color.YELLOW:
                return "Y " + this.value;
        }
        return "Unknown";
    }

    public toString(): string {
        switch (this.color) {
            case Color.BLUE:
                return "Blue " + this.value;
            case Color.GREEN:
                return "Green " + this.value;
            case Color.RED:
                return "Red " + this.value;
            case Color.WHITE:
                return "White " + this.value;
            case Color.YELLOW:
                return "Yellow " + this.value;
        }
        return "Unknown";
    }

    public is(color: Color, value: number) {
        return this.color === color && this.value === value;
    }

    public getColor(): Color {
        return this.color;
    }

    public getNumber(): number {
        return this.value;
    }

    public getColorLabel(): string {
        let color = this.getColor();
        switch (color) {
            case Color.BLUE:
                return "Blue ";
            case Color.GREEN:
                return "Green ";
            case Color.RED:
                return "Red ";
            case Color.WHITE:
                return "White ";
            case Color.YELLOW:
                return "Yellow ";
        }
    }

    public getColors(): Color[] {
        return [this.color];
    }

    public getColorLabels(): string[] {
        return [this.getColorLabel()];
    }

    public getNumbers(): number[] {
        return [this.value];
    }

    public isColorConfirmed(): boolean {
        return true;
    }

    public isNumberConfirmed(): boolean {
        return true;
    }

    public setBlue(red: boolean): void {
        // ignored since this card is known
    }

    public setGreen(green: boolean): void {
        // ignored since this card is known
    }

    public setRed(red: boolean): void {
        // ignored since this card is known
    }

    public setWhite(white: boolean): void {
        // ignored since this card is known
    }

    public setYellow(yellow: boolean): void {
        // ignored since this card is known
    }

    public setOne(one: boolean): void {
        // ignored since this card is known
    }

    public setTwo(two: boolean): void {
        // ignored since this card is known
    }

    public setThree(three: boolean): void {
        // ignored since this card is known
    }

    public setFour(four: boolean): void {
        // ignored since this card is known
    }

    public setFive(five: boolean): void {
        // ignored since this card is known
    }

    public update(): void {
        // ignored since this card is known
    }
}
