/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Color } from './game';

export interface Card {

    is(color: Color, value: number): boolean;

    getColor(): Color;

    getNumber(): number;

    getColorLabel(): string;

    getColors(): Color[];

    getColorLabels(): string[];

    getNumber(): number;

    getNumbers(): number[];

    isColorConfirmed(): boolean;

    isNumberConfirmed(): boolean;

    setBlue(red: boolean): void;

    setGreen(green: boolean): void;

    setRed(red: boolean): void;

    setWhite(white: boolean): void;

    setYellow(yellow: boolean): void;

    setOne(one: boolean): void;

    setTwo(two: boolean): void;

    setThree(three: boolean): void;

    setFour(four: boolean): void;

    setFive(five: boolean): void;

    update(): void;
}
