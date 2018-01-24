/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Color } from './game';

export class Card {

    private color: Color;
    private value: number;

    constructor(color: Color, value: number) {
        this.color = color;
        this.value = value;
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
}
