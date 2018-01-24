/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Deck } from "./deck";
import { Color } from "./game";
import { Card } from "./card";

export class UnknownCard implements Card {

    private blue: boolean = true;
    private green: boolean = true;
    private red: boolean = true;
    private white: boolean = true;
    private yellow: boolean = true;

    private one: boolean = true;
    private two: boolean = true;
    private three: boolean = true;
    private four: boolean = true;
    private five: boolean = true;

    private label: string = "";

    constructor(private deck: Deck) {
        this.label = this.toString();
    }

    public getColor(): Color {
        if (this.isColorConfirmed()) {
            if (this.blue) {
                return Color.BLUE;
            } else if (this.green) {
                return Color.GREEN;
            } else if (this.red) {
                return Color.RED;
            } else if (this.white) {
                return Color.WHITE;
            }
            return Color.YELLOW;
        }
        return null;
    }

    public getColorLabel(): string {
        if (this.isColorConfirmed()) {
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
        return null;
    }

    public getColors(): Color[] {
        let colors = [];
        if (this.blue) {
            colors.push(Color.BLUE);
        }
        if (this.green) {
            colors.push(Color.GREEN);
        }
        if (this.red) {
            colors.push(Color.RED);
        }
        if (this.white) {
            colors.push(Color.WHITE);
        }
        if (this.yellow) {
            colors.push(Color.YELLOW);
        }
        return colors;
    }

    public getColorLabels(): string[] {
        let colors = [];
        if (this.blue) {
            colors.push("Blue");
        }
        if (this.green) {
            colors.push("Green");
        }
        if (this.red) {
            colors.push("Red");
        }
        if (this.white) {
            colors.push("White");
        }
        if (this.yellow) {
            colors.push("Yellow");
        }
        return colors;
    }

    public getNumber(): number {
        if (this.isNumberConfirmed()) {
            if (this.one) {
                return 1;
            } else if (this.two) {
                return 2;
            } else if (this.three) {
                return 3;
            } else if (this.four) {
                return 4;
            }
            return 5;
        }
        return null;
    }

    public getNumbers(): number[] {
        let numbers = [];
        if (this.one) {
            numbers.push(1);
        }
        if (this.two) {
            numbers.push(2);
        }
        if (this.three) {
            numbers.push(3);
        }
        if (this.four) {
            numbers.push(4);
        }
        if (this.five) {
            numbers.push(5);
        }
        return numbers;
    }

    public isColorConfirmed(): boolean {
        if (this.blue) {
            return !this.green && !this.red && !this.white && !this.yellow;
        } else if (this.green) {
            return !this.red && !this.white && !this.yellow;
        } else if (this.red) {
            return !this.white && !this.yellow;
        } else if (this.white) {
            return !this.yellow;
        }
        return this.yellow;
    }

    public isNumberConfirmed(): boolean {
        if (this.one) {
            return !this.two && !this.three && !this.four && !this.five;
        } else if (this.two) {
            return !this.three && !this.four && !this.five;
        } else if (this.three) {
            return !this.four && !this.five;
        } else if (this.four) {
            return !this.five;
        }
        return this.five;
    }

    public setBlue(blue: boolean) {
        this.blue = blue;
        if (blue) {
            this.green = false;
            this.red = false;
            this.white = false;
            this.yellow = false;
        }
        this.label = this.toString();
    }

    public setGreen(green: boolean) {
        this.green = green;
        if (green) {
            this.blue = false;
            this.red = false;
            this.white = false;
            this.yellow = false;
        }
        this.label = this.toString();
    }

    public setRed(red: boolean) {
        this.red = red;
        if (red) {
            this.blue = false;
            this.green = false;
            this.white = false;
            this.yellow = false;
        }
        this.label = this.toString();
    }

    public setWhite(white: boolean) {
        this.white = white;
        if (white) {
            this.blue = false;
            this.green = false;
            this.red = false;
            this.yellow = false;
        }
        this.label = this.toString();
    }

    public setYellow(yellow: boolean) {
        this.yellow = yellow;
        if (yellow) {
            this.blue = false;
            this.green = false;
            this.red = false;
            this.white = false;
        }
        this.label = this.toString();
    }

    public setOne(one: boolean) {
        this.one = one;
        if (one) {
            this.two = false;
            this.three = false;
            this.four = false;
            this.five = false;
        }
        this.label = this.toString();
    }

    public setTwo(two: boolean) {
        this.two = two;
        if (two) {
            this.one = false;
            this.three = false;
            this.four = false;
            this.five = false;
        }
        this.label = this.toString();
    }

    public setThree(three: boolean) {
        this.three = three;
        if (three) {
            this.one = false;
            this.two = false;
            this.four = false;
            this.five = false;
        }
        this.label = this.toString();
    }

    public setFour(four: boolean) {
        this.four = four;
        if (four) {
            this.one = false;
            this.two = false;
            this.three = false;
            this.five = false;
        }
        this.label = this.toString();
    }

    public setFive(five: boolean) {
        this.five = five;
        if (five) {
            this.one = false;
            this.two = false;
            this.three = false;
            this.four = false;
        }
        this.label = this.toString();
    }

    public update(): void {
        if (this.isColorConfirmed()) {
            let color = this.getColor();
            if (this.one) {
                this.one = this.deck.hasCard(color, 1);
            }
            if (this.two) {
                this.two = this.deck.hasCard(color, 2);
            }
            if (this.three) {
                this.three = this.deck.hasCard(color, 3);
            }
            if (this.four) {
                this.four = this.deck.hasCard(color, 4);
            }
            if (this.five) {
                this.five = this.deck.hasCard(color, 5);
            }
        } else if (this.isNumberConfirmed()) {
            let value = this.getNumber();
            if (this.blue) {
                this.blue = this.deck.hasCard(Color.BLUE, value);
            }
            if (this.green) {
                this.green = this.deck.hasCard(Color.GREEN, value);
            }
            if (this.red) {
                this.red = this.deck.hasCard(Color.RED, value);
            }
            if (this.white) {
                this.white = this.deck.hasCard(Color.WHITE, value);
            }
            if (this.yellow) {
                this.yellow = this.deck.hasCard(Color.YELLOW, value);
            }
        } else {
            if (this.blue) {
                this.blue = this.deck.hasColor(Color.BLUE);
            }
            if (this.green) {
                this.green = this.deck.hasColor(Color.GREEN);
            }
            if (this.red) {
                this.red = this.deck.hasColor(Color.RED);
            }
            if (this.white) {
                this.white = this.deck.hasColor(Color.WHITE);
            }
            if (this.yellow) {
                this.yellow = this.deck.hasColor(Color.YELLOW);
            }
            let check = [false, false, false, false, false];
            for (let c of this.getColors()) {
                if (this.one) {
                    check[0] = check[0] || this.deck.hasCard(c, 1);
                }
                if (this.two) {
                    check[1] = check[1] || this.deck.hasCard(c, 2);
                }
                if (this.three) {
                    check[2] = check[2] || this.deck.hasCard(c, 3);
                }
                if (this.four) {
                    check[3] = check[3] || this.deck.hasCard(c, 4);
                }
                if (this.five) {
                    check[4] = check[4] || this.deck.hasCard(c, 5);
                }
            }
            this.one = check[0];
            this.two = check[1];
            this.three = check[2];
            this.four = check[3];
            this.five = check[4];
        }
        this.label = this.toString();
    }

    public is(color: Color, value: number): boolean {
        return this.getColor() === color && this.getNumber() === value;
    }

    public toString(): string {
        let value = "";
        if (this.blue) {
            value += "B ";
        }
        if (this.green) {
            value += "G ";
        }
        if (this.red) {
            value += "R ";
        }
        if (this.white) {
            value += "W ";
        }
        if (this.yellow) {
            value += "Y ";
        }
        if (this.one) {
            value += "1 ";
        }
        if (this.two) {
            value += "2 ";
        }
        if (this.three) {
            value += "3 ";
        }
        if (this.four) {
            value += "4 ";
        }
        if (this.five) {
            value += "5";
        }
        return value;
    }

}
