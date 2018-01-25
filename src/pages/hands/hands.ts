/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
'use strict';

import { Component } from '@angular/core';
import { NavController, ActionSheetController, AlertController } from 'ionic-angular';

import { Game, Color } from '../../providers/game';
import { Player } from '../../providers/player';
import { Card } from '../../providers/card';
import { HintPage } from '../hint/hint';
import { UnknownCard } from '../../providers/unknownCard';

@Component({
    selector: 'page-hands',
    templateUrl: 'hands.html'
})
export class HandsPage {

    private players;

    constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController, private alertCtrl: AlertController, public game: Game) {
        this.players = game.getPlayers();
    }

    private hint(hint: string) {
        this.navCtrl.push(HintPage, { hint: hint });
    }

    public reorderHand(event) {
        this.game.getHand().reorder(event.from, event.to);
    }

    public reorderPlayerHand(player: Player, event) {
        player.reorder(event.from, event.to);
    }

    public performHandAction(play: boolean, card: UnknownCard) {
        if (card.isColorConfirmed()) {
            if (card.isNumberConfirmed()) {
                if (play && !this.game.canPlay(card.getColor(), card.getNumber())) {
                    let alert = this.alertCtrl.create({
                        title: 'Invalid Play',
                        subTitle: 'Cannot play ' + card.toString(),
                        buttons: ['Dismiss']
                    })
                    alert.present();
                    return;
                }
                this.game.getHand().play(card, card.getColor(), card.getNumber());
            } else {
                let color = card.getColor();
                let label = card.getColorLabel();
                let numbers = card.getNumbers();
                let buttons = [];
                for (let i = 0; i < numbers.length; i++) {
                    buttons.push({
                        text: label + numbers[i],
                        handler: () => {
                            if (play) {
                                if (play && !this.game.canPlay(color, i + 1)) {
                                    let alert = this.alertCtrl.create({
                                        title: 'Invalid Play',
                                        subTitle: 'Cannot play ' + label + numbers[i],
                                        buttons: ['Dismiss']
                                    })
                                    alert.present();
                                    return;
                                }
                                this.game.getHand().play(card, color, i + 1);
                            } else {
                                this.game.getHand().discard(card, color, i + 1);
                            }
                        }
                    });
                }
                buttons.push({
                    text: 'Cancel',
                    role: 'cancel'
                });
                let actionSheet = this.actionSheetCtrl.create({
                    title: play ? 'Play' : 'Discard',
                    buttons: buttons
                });
                actionSheet.present();
            }
        } else if (card.isNumberConfirmed()) {
            let value = card.getNumber();
            let colors = card.getColors();
            let labels = card.getColorLabels();
            let buttons = [];
            for (let i = 0; i < colors.length; i++) {
                buttons.push({
                    text: labels[i] + ' ' + value,
                    handler: () => {
                        if (play) {
                            if (play && !this.game.canPlay(colors[i], value)) {
                                let alert = this.alertCtrl.create({
                                    title: 'Invalid Play',
                                    subTitle: 'Cannot play ' + labels[i] + ' ' + value,
                                    buttons: ['Dismiss']
                                })
                                alert.present();
                                return;
                            }
                            this.game.getHand().play(card, colors[i], value);
                        } else {
                            this.game.getHand().discard(card, colors[i], value);
                        }
                    }
                });
            }
            buttons.push({
                text: 'Cancel',
                role: 'cancel'
            });
            let actionSheet = this.actionSheetCtrl.create({
                title: play ? 'Play' : 'Discard',
                buttons: buttons
            });
            actionSheet.present();
        } else {
            let colors = card.getColors();
            let labels = card.getColorLabels();
            let buttons = [];
            for (let i = 0; i < colors.length; i++) {
                buttons.push({
                    text: labels[i],
                    handler: () => {
                        let numbers = card.getNumbers();
                        let buttons = [];
                        for (let j = 0; j < numbers.length; j++) {
                            buttons.push({
                                text: labels[i] + ' ' + numbers[j],
                                handler: () => {
                                    if (play) {
                                        if (play && !this.game.canPlay(colors[i], j + 1)) {
                                            let alert = this.alertCtrl.create({
                                                title: 'Invalid Play',
                                                subTitle: 'Cannot play ' + labels[i] + ' ' + (j + 1),
                                                buttons: ['Dismiss']
                                            })
                                            alert.present();
                                            return;
                                        }
                                        this.game.getHand().play(card, colors[i], j + 1);
                                    } else {
                                        this.game.getHand().discard(card, colors[i], j + 1);
                                    }
                                }
                            });
                        }
                        buttons.push({
                            text: 'Cancel',
                            role: 'cancel'
                        });
                        let actionSheet = this.actionSheetCtrl.create({
                            title: play ? 'Play' : 'Discard',
                            buttons: buttons
                        });
                        actionSheet.present();
                    }
                });
            }
            buttons.push({
                text: 'Cancel',
                role: 'cancel'
            });
            let actionSheet = this.actionSheetCtrl.create({
                title: play ? 'Play' : 'Discard',
                buttons: buttons
            });
            actionSheet.present();
        }
    }

    public presentHintColorActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Hint',
            buttons: [
                {
                    text: 'Blue',
                    handler: () => {
                        this.hint('B');
                    }
                }, {
                    text: 'Green',
                    handler: () => {
                        this.hint('G');
                    }
                }, {
                    text: 'Red',
                    handler: () => {
                        this.hint('R');
                    }
                }, {
                    text: 'White',
                    handler: () => {
                        this.hint('W');
                    }
                }, {
                    text: 'Yellow',
                    handler: () => {
                        this.hint('Y');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

    public presentHintNumberActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Hint',
            buttons: [
                {
                    text: '1',
                    handler: () => {
                        this.hint('1');
                    }
                }, {
                    text: '2',
                    handler: () => {
                        this.hint('2');
                    }
                }, {
                    text: '3',
                    handler: () => {
                        this.hint('3');
                    }
                }, {
                    text: '4',
                    handler: () => {
                        this.hint('4');
                    }
                }, {
                    text: '5',
                    handler: () => {
                        this.hint('5');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    }

    public presentDrawColorActionSheet(play: boolean, player: Player, card: Card) {
        if (play && !this.game.canPlay(card.getColor(), card.getNumber())) {
            let alert = this.alertCtrl.create({
                title: 'Invalid Play',
                subTitle: 'Cannot play ' + card.toString(),
                buttons: ['Dismiss']
            })
            alert.present();
            return;
        }
        let buttons = [];
        if (this.game.getDeck().hasColor(Color.BLUE)) {
            buttons.push({
                text: 'Blue',
                handler: () => {
                    this.presentDrawNumberActionSheet(play, player, card, Color.BLUE);
                }
            });
        }
        if (this.game.getDeck().hasColor(Color.GREEN)) {
            buttons.push({
                text: 'Green',
                handler: () => {
                    this.presentDrawNumberActionSheet(play, player, card, Color.GREEN);
                }
            });
        }
        if (this.game.getDeck().hasColor(Color.RED)) {
            buttons.push({
                text: 'Red',
                handler: () => {
                    this.presentDrawNumberActionSheet(play, player, card, Color.RED);
                }
            });
        }
        if (this.game.getDeck().hasColor(Color.WHITE)) {
            buttons.push({
                text: 'White',
                handler: () => {
                    this.presentDrawNumberActionSheet(play, player, card, Color.WHITE);
                }
            });
        }
        if (this.game.getDeck().hasColor(Color.YELLOW)) {
            buttons.push({
                text: 'Yellow',
                handler: () => {
                    this.presentDrawNumberActionSheet(play, player, card, Color.YELLOW);
                }
            });
        }
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Draw',
            buttons: buttons
        });
        actionSheet.present();
    }

    private presentDrawNumberActionSheet(play: boolean, player: Player, card: Card, color: Color) {
        let buttons = [];
        if (this.game.getDeck().hasCard(color, 1)) {
            buttons.push({
                text: '1',
                handler: () => {
                    this.performAction(player, card, play, color, 1);
                }
            });
        }
        if (this.game.getDeck().hasCard(color, 2)) {
            buttons.push({
                text: '2',
                handler: () => {
                    this.performAction(player, card, play, color, 2);
                }
            });
        }
        if (this.game.getDeck().hasCard(color, 3)) {
            buttons.push({
                text: '3',
                handler: () => {
                    this.performAction(player, card, play, color, 3);
                }
            });
        }
        if (this.game.getDeck().hasCard(color, 4)) {
            buttons.push({
                text: '4',
                handler: () => {
                    this.performAction(player, card, play, color, 4);
                }
            });
        }
        if (this.game.getDeck().hasCard(color, 5)) {
            buttons.push({
                text: '5',
                handler: () => {
                    this.performAction(player, card, play, color, 5);
                }
            });
        }
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Draw',
            buttons: buttons
        });
        actionSheet.present();
    }

    private performAction(player: Player, card: Card, play: boolean, color: Color, value: number) {
        if (play) {
            player.play(card);
        } else {
            player.discard(card);
        }
        player.drawFromDeck(color, value);
        this.game.getHand().update();
    }

}
