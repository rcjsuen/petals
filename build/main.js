webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playerSetup_playerSetup__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game__ = __webpack_require__(20);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SetupPage = (function () {
    function SetupPage(navCtrl, game) {
        this.navCtrl = navCtrl;
        this.game = game;
    }
    SetupPage.prototype.start = function () {
        this.game.setPlayerCount(this.players);
        this.game.start();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__playerSetup_playerSetup__["a" /* PlayerSetupPage */]);
    };
    SetupPage.prototype.checkForm = function () {
        return this.players !== undefined;
    };
    SetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Remy\code\mobile\petals\src\pages\setup\setup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Setup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h1>Petals</h1>\n\n  <ion-list radio-group [(ngModel)]="players">\n    <ion-item>\n      <ion-label>2 players</ion-label>\n      <ion-radio value="2"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>3 players</ion-label>\n      <ion-radio value="3"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>4 players</ion-label>\n      <ion-radio value="4"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>5 players</ion-label>\n      <ion-radio value="5"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block (click)="start()" [disabled]="!checkForm()">Start Game</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Remy\code\mobile\petals\src\pages\setup\setup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_game__["b" /* Game */]])
    ], SetupPage);
    return SetupPage;
}());

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerSetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_game__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_player__ = __webpack_require__(269);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlayerSetupPage = (function () {
    function PlayerSetupPage(navCtrl, game) {
        this.navCtrl = navCtrl;
        this.game = game;
        this.players = [];
        for (var i = 1; i < game.getPlayerCount(); i++) {
            this.players.push({
                number: i + 1,
                card1: "",
                card2: "",
                card3: "",
                card4: "",
                card5: ""
            });
        }
    }
    PlayerSetupPage.prototype.finish = function () {
        var deck = this.game.getDeck();
        for (var i = 0; i < this.players.length; i++) {
            if (!this.players[i].name) {
                this.players[i].name = "Player " + (i + 2);
            }
            var player = new __WEBPACK_IMPORTED_MODULE_4__providers_player__["a" /* Player */](this.game, this.players[i].name);
            player.draw(deck.drawString(this.players[i].card1));
            player.draw(deck.drawString(this.players[i].card2));
            player.draw(deck.drawString(this.players[i].card3));
            player.draw(deck.drawString(this.players[i].card4));
            if (this.game.getPlayerCount() < 4) {
                // draw the fifth card if it's a two or three player game
                player.draw(deck.drawString(this.players[i].card5));
            }
            this.game.addPlayer(player);
        }
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PlayerSetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-playerSetup',template:/*ion-inline-start:"C:\Users\Remy\code\mobile\petals\src\pages\playerSetup\playerSetup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Setup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list *ngFor="let player of players">\n    <ion-item>\n      <ion-input type="text" placeholder="Player {{player.number}}" [(ngModel)]="player.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Card</ion-label>\n      <ion-select [(ngModel)]="player.card1">\n        <ion-option value="B1">Blue 1</ion-option>\n        <ion-option value="B2">Blue 2</ion-option>\n        <ion-option value="B3">Blue 3</ion-option>\n        <ion-option value="B4">Blue 4</ion-option>\n        <ion-option value="B5">Blue 5</ion-option>\n        <ion-option value="G1">Green 1</ion-option>\n        <ion-option value="G2">Green 2</ion-option>\n        <ion-option value="G3">Green 3</ion-option>\n        <ion-option value="G4">Green 4</ion-option>\n        <ion-option value="G5">Green 5</ion-option>\n        <ion-option value="R1">Red 1</ion-option>\n        <ion-option value="R2">Red 2</ion-option>\n        <ion-option value="R3">Red 3</ion-option>\n        <ion-option value="R4">Red 4</ion-option>\n        <ion-option value="R5">Red 5</ion-option>\n        <ion-option value="W1">White 1</ion-option>\n        <ion-option value="W2">White 2</ion-option>\n        <ion-option value="W3">White 3</ion-option>\n        <ion-option value="W4">White 4</ion-option>\n        <ion-option value="W5">White 5</ion-option>\n        <ion-option value="Y1">Yellow 1</ion-option>\n        <ion-option value="Y2">Yellow 2</ion-option>\n        <ion-option value="Y3">Yellow 3</ion-option>\n        <ion-option value="Y4">Yellow 4</ion-option>\n        <ion-option value="Y5">Yellow 5</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Card</ion-label>\n      <ion-select [(ngModel)]="player.card2">\n        <ion-option value="B1">Blue 1</ion-option>\n        <ion-option value="B2">Blue 2</ion-option>\n        <ion-option value="B3">Blue 3</ion-option>\n        <ion-option value="B4">Blue 4</ion-option>\n        <ion-option value="B5">Blue 5</ion-option>\n        <ion-option value="G1">Green 1</ion-option>\n        <ion-option value="G2">Green 2</ion-option>\n        <ion-option value="G3">Green 3</ion-option>\n        <ion-option value="G4">Green 4</ion-option>\n        <ion-option value="G5">Green 5</ion-option>\n        <ion-option value="R1">Red 1</ion-option>\n        <ion-option value="R2">Red 2</ion-option>\n        <ion-option value="R3">Red 3</ion-option>\n        <ion-option value="R4">Red 4</ion-option>\n        <ion-option value="R5">Red 5</ion-option>\n        <ion-option value="W1">White 1</ion-option>\n        <ion-option value="W2">White 2</ion-option>\n        <ion-option value="W3">White 3</ion-option>\n        <ion-option value="W4">White 4</ion-option>\n        <ion-option value="W5">White 5</ion-option>\n        <ion-option value="Y1">Yellow 1</ion-option>\n        <ion-option value="Y2">Yellow 2</ion-option>\n        <ion-option value="Y3">Yellow 3</ion-option>\n        <ion-option value="Y4">Yellow 4</ion-option>\n        <ion-option value="Y5">Yellow 5</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Card</ion-label>\n      <ion-select [(ngModel)]="player.card3">\n        <ion-option value="B1">Blue 1</ion-option>\n        <ion-option value="B2">Blue 2</ion-option>\n        <ion-option value="B3">Blue 3</ion-option>\n        <ion-option value="B4">Blue 4</ion-option>\n        <ion-option value="B5">Blue 5</ion-option>\n        <ion-option value="G1">Green 1</ion-option>\n        <ion-option value="G2">Green 2</ion-option>\n        <ion-option value="G3">Green 3</ion-option>\n        <ion-option value="G4">Green 4</ion-option>\n        <ion-option value="G5">Green 5</ion-option>\n        <ion-option value="R1">Red 1</ion-option>\n        <ion-option value="R2">Red 2</ion-option>\n        <ion-option value="R3">Red 3</ion-option>\n        <ion-option value="R4">Red 4</ion-option>\n        <ion-option value="R5">Red 5</ion-option>\n        <ion-option value="W1">White 1</ion-option>\n        <ion-option value="W2">White 2</ion-option>\n        <ion-option value="W3">White 3</ion-option>\n        <ion-option value="W4">White 4</ion-option>\n        <ion-option value="W5">White 5</ion-option>\n        <ion-option value="Y1">Yellow 1</ion-option>\n        <ion-option value="Y2">Yellow 2</ion-option>\n        <ion-option value="Y3">Yellow 3</ion-option>\n        <ion-option value="Y4">Yellow 4</ion-option>\n        <ion-option value="Y5">Yellow 5</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Card</ion-label>\n      <ion-select [(ngModel)]="player.card4">\n        <ion-option value="B1">Blue 1</ion-option>\n        <ion-option value="B2">Blue 2</ion-option>\n        <ion-option value="B3">Blue 3</ion-option>\n        <ion-option value="B4">Blue 4</ion-option>\n        <ion-option value="B5">Blue 5</ion-option>\n        <ion-option value="G1">Green 1</ion-option>\n        <ion-option value="G2">Green 2</ion-option>\n        <ion-option value="G3">Green 3</ion-option>\n        <ion-option value="G4">Green 4</ion-option>\n        <ion-option value="G5">Green 5</ion-option>\n        <ion-option value="R1">Red 1</ion-option>\n        <ion-option value="R2">Red 2</ion-option>\n        <ion-option value="R3">Red 3</ion-option>\n        <ion-option value="R4">Red 4</ion-option>\n        <ion-option value="R5">Red 5</ion-option>\n        <ion-option value="W1">White 1</ion-option>\n        <ion-option value="W2">White 2</ion-option>\n        <ion-option value="W3">White 3</ion-option>\n        <ion-option value="W4">White 4</ion-option>\n        <ion-option value="W5">White 5</ion-option>\n        <ion-option value="Y1">Yellow 1</ion-option>\n        <ion-option value="Y2">Yellow 2</ion-option>\n        <ion-option value="Y3">Yellow 3</ion-option>\n        <ion-option value="Y4">Yellow 4</ion-option>\n        <ion-option value="Y5">Yellow 5</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- players don\'t include self, so less than 3 and not 4 -->\n    <ion-item *ngIf="players.length < 3">\n      <ion-label>Card</ion-label>\n      <ion-select [(ngModel)]="player.card5">\n        <ion-option value="B1">Blue 1</ion-option>\n        <ion-option value="B2">Blue 2</ion-option>\n        <ion-option value="B3">Blue 3</ion-option>\n        <ion-option value="B4">Blue 4</ion-option>\n        <ion-option value="B5">Blue 5</ion-option>\n        <ion-option value="G1">Green 1</ion-option>\n        <ion-option value="G2">Green 2</ion-option>\n        <ion-option value="G3">Green 3</ion-option>\n        <ion-option value="G4">Green 4</ion-option>\n        <ion-option value="G5">Green 5</ion-option>\n        <ion-option value="R1">Red 1</ion-option>\n        <ion-option value="R2">Red 2</ion-option>\n        <ion-option value="R3">Red 3</ion-option>\n        <ion-option value="R4">Red 4</ion-option>\n        <ion-option value="R5">Red 5</ion-option>\n        <ion-option value="W1">White 1</ion-option>\n        <ion-option value="W2">White 2</ion-option>\n        <ion-option value="W3">White 3</ion-option>\n        <ion-option value="W4">White 4</ion-option>\n        <ion-option value="W5">White 5</ion-option>\n        <ion-option value="Y1">Yellow 1</ion-option>\n        <ion-option value="Y2">Yellow 2</ion-option>\n        <ion-option value="Y3">Yellow 3</ion-option>\n        <ion-option value="Y4">Yellow 4</ion-option>\n        <ion-option value="Y5">Yellow 5</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  <button ion-button block (click)="finish()">Finish</button>\n</ion-content>'/*ion-inline-end:"C:\Users\Remy\code\mobile\petals\src\pages\playerSetup\playerSetup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_game__["b" /* Game */]])
    ], PlayerSetupPage);
    return PlayerSetupPage;
}());

//# sourceMappingURL=playerSetup.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hands_hands__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__deck_deck__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__hands_hands__["a" /* HandsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__deck_deck__["a" /* DeckPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Remy\code\mobile\petals\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="0">\n  <ion-tab [root]="tab1Root" tabTitle="Hands" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Deck" tabIcon="logo-buffer"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Remy\code\mobile\petals\src\pages\tabs\tabs.html"*/
        })
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HandsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hint_hint__ = __webpack_require__(193);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HandsPage = (function () {
    function HandsPage(navCtrl, actionSheetCtrl, game) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.game = game;
        this.players = game.getPlayers();
    }
    HandsPage.prototype.hint = function (hint) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hint_hint__["a" /* HintPage */], { hint: hint });
    };
    HandsPage.prototype.reorderHand = function (event) {
        this.game.getHand().reorder(event.from, event.to);
    };
    HandsPage.prototype.reorderPlayerHand = function (player, event) {
        player.reorder(event.from, event.to);
    };
    HandsPage.prototype.performHandAction = function (play, card) {
        var _this = this;
        if (card.isColorConfirmed()) {
            if (card.isNumberConfirmed()) {
                this.game.getHand().play(card, card.getColor(), card.getNumber());
            }
            else {
                var color_1 = card.getColor();
                var label = card.getColorLabel();
                var numbers = card.getNumbers();
                var buttons = [];
                var _loop_1 = function (i) {
                    buttons.push({
                        text: label + numbers[i],
                        handler: function () {
                            if (play) {
                                _this.game.getHand().play(card, color_1, i + 1);
                            }
                            else {
                                _this.game.getHand().discard(card, color_1, i + 1);
                            }
                        }
                    });
                };
                for (var i = 0; i < numbers.length; i++) {
                    _loop_1(i);
                }
                buttons.push({
                    text: 'Cancel',
                    role: 'cancel'
                });
                var actionSheet = this.actionSheetCtrl.create({
                    title: play ? 'Play' : 'Discard',
                    buttons: buttons
                });
                actionSheet.present();
            }
        }
        else if (card.isNumberConfirmed()) {
            var value_1 = card.getNumber();
            var colors_1 = card.getColors();
            var labels = card.getColorLabels();
            var buttons = [];
            var _loop_2 = function (i) {
                buttons.push({
                    text: labels[i] + ' ' + value_1,
                    handler: function () {
                        if (play) {
                            _this.game.getHand().play(card, colors_1[i], value_1);
                        }
                        else {
                            _this.game.getHand().discard(card, colors_1[i], value_1);
                        }
                    }
                });
            };
            for (var i = 0; i < colors_1.length; i++) {
                _loop_2(i);
            }
            buttons.push({
                text: 'Cancel',
                role: 'cancel'
            });
            var actionSheet = this.actionSheetCtrl.create({
                title: play ? 'Play' : 'Discard',
                buttons: buttons
            });
            actionSheet.present();
        }
        else {
            var colors_2 = card.getColors();
            var labels_1 = card.getColorLabels();
            var buttons = [];
            var _loop_3 = function (i) {
                buttons.push({
                    text: labels_1[i],
                    handler: function () {
                        var numbers = card.getNumbers();
                        var buttons = [];
                        var _loop_4 = function (j) {
                            buttons.push({
                                text: labels_1[i] + ' ' + numbers[j],
                                handler: function () {
                                    if (play) {
                                        _this.game.getHand().play(card, colors_2[i], j + 1);
                                    }
                                    else {
                                        _this.game.getHand().discard(card, colors_2[i], j + 1);
                                    }
                                }
                            });
                        };
                        for (var j = 0; j < numbers.length; j++) {
                            _loop_4(j);
                        }
                        buttons.push({
                            text: 'Cancel',
                            role: 'cancel'
                        });
                        var actionSheet = _this.actionSheetCtrl.create({
                            title: play ? 'Play' : 'Discard',
                            buttons: buttons
                        });
                        actionSheet.present();
                    }
                });
            };
            for (var i = 0; i < colors_2.length; i++) {
                _loop_3(i);
            }
            buttons.push({
                text: 'Cancel',
                role: 'cancel'
            });
            var actionSheet = this.actionSheetCtrl.create({
                title: play ? 'Play' : 'Discard',
                buttons: buttons
            });
            actionSheet.present();
        }
    };
    HandsPage.prototype.presentHintColorActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Hint',
            buttons: [
                {
                    text: 'Blue',
                    handler: function () {
                        _this.hint('B');
                    }
                }, {
                    text: 'Green',
                    handler: function () {
                        _this.hint('G');
                    }
                }, {
                    text: 'Red',
                    handler: function () {
                        _this.hint('R');
                    }
                }, {
                    text: 'White',
                    handler: function () {
                        _this.hint('W');
                    }
                }, {
                    text: 'Yellow',
                    handler: function () {
                        _this.hint('Y');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HandsPage.prototype.presentHintNumberActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Hint',
            buttons: [
                {
                    text: '1',
                    handler: function () {
                        _this.hint('1');
                    }
                }, {
                    text: '2',
                    handler: function () {
                        _this.hint('2');
                    }
                }, {
                    text: '3',
                    handler: function () {
                        _this.hint('3');
                    }
                }, {
                    text: '4',
                    handler: function () {
                        _this.hint('4');
                    }
                }, {
                    text: '5',
                    handler: function () {
                        _this.hint('5');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HandsPage.prototype.presentDrawColorActionSheet = function (play, player, card) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Draw',
            buttons: [
                {
                    text: 'Blue',
                    handler: function () {
                        _this.presentDrawNumberActionSheet(play, player, card, __WEBPACK_IMPORTED_MODULE_2__providers_game__["a" /* Color */].BLUE);
                    }
                }, {
                    text: 'Green',
                    handler: function () {
                        _this.presentDrawNumberActionSheet(play, player, card, __WEBPACK_IMPORTED_MODULE_2__providers_game__["a" /* Color */].GREEN);
                    }
                }, {
                    text: 'Red',
                    handler: function () {
                        _this.presentDrawNumberActionSheet(play, player, card, __WEBPACK_IMPORTED_MODULE_2__providers_game__["a" /* Color */].RED);
                    }
                }, {
                    text: 'White',
                    handler: function () {
                        _this.presentDrawNumberActionSheet(play, player, card, __WEBPACK_IMPORTED_MODULE_2__providers_game__["a" /* Color */].WHITE);
                    }
                }, {
                    text: 'Yellow',
                    handler: function () {
                        _this.presentDrawNumberActionSheet(play, player, card, __WEBPACK_IMPORTED_MODULE_2__providers_game__["a" /* Color */].YELLOW);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HandsPage.prototype.presentDrawNumberActionSheet = function (play, player, card, color) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Draw',
            buttons: [
                {
                    text: '1',
                    handler: function () {
                        _this.performAction(player, card, play, color, 1);
                    }
                }, {
                    text: '2',
                    handler: function () {
                        _this.performAction(player, card, play, color, 2);
                    }
                }, {
                    text: '3',
                    handler: function () {
                        _this.performAction(player, card, play, color, 3);
                    }
                }, {
                    text: '4',
                    handler: function () {
                        _this.performAction(player, card, play, color, 4);
                    }
                }, {
                    text: '5',
                    handler: function () {
                        _this.performAction(player, card, play, color, 5);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HandsPage.prototype.performAction = function (player, card, play, color, value) {
        if (play) {
            player.play(card);
        }
        else {
            player.discard(card);
        }
        player.drawFromDeck(color, value);
        this.game.getHand().update();
    };
    HandsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hands',template:/*ion-inline-start:"C:\Users\Remy\code\mobile\petals\src\pages\hands\hands.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Hands\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-divider sticky>\n      <ion-label>\n        My Hand\n      </ion-label>\n    </ion-item-divider>\n    <ion-item-group reorder="true" (ionItemReorder)="reorderHand($event)">\n      <ion-item-sliding #item *ngFor="let card of game.getHand().getCards()">\n        <ion-item>\n          {{card.label}}\n        </ion-item>\n        <ion-item-options side="left">\n          <button ion-button color="danger" (click)="performHandAction(false, card)">\n            <ion-icon name="trash"></ion-icon>\n            Discard\n          </button>\n        </ion-item-options>\n\n        <ion-item-options side="right">\n          <button ion-button (click)="performHandAction(true, card)">\n            Play\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-item-group>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button block (click)="presentHintColorActionSheet()">Set Color</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button block (click)="presentHintNumberActionSheet()">Set Number</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div *ngFor="let player of players">\n      <ion-item-divider sticky>\n        <ion-label>\n          {{player.name}}\n        </ion-label>\n      </ion-item-divider>\n\n      <ion-item-group reorder="true" (ionItemReorder)="reorderPlayerHand(player, $event)">\n        <ion-item-sliding #item *ngFor="let card of player.cards">\n          <ion-item>\n            {{card}}\n          </ion-item>\n          <ion-item-options side="left">\n            <button ion-button color="danger" (click)="presentDrawColorActionSheet(false, player, card)">\n              <ion-icon name="trash"></ion-icon>\n              Discard\n            </button>\n          </ion-item-options>\n\n          <ion-item-options side="right">\n            <button ion-button (click)="presentDrawColorActionSheet(true, player, card)">Play</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-item-group>\n    </div>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Remy\code\mobile\petals\src\pages\hands\hands.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_2__providers_game__["b" /* Game */]])
    ], HandsPage);
    return HandsPage;
}());

//# sourceMappingURL=hands.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(11);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HintPage = (function () {
    function HintPage(navCtrl, navParams, game) {
        this.navCtrl = navCtrl;
        this.game = game;
        this.blue = false;
        this.green = false;
        this.red = false;
        this.white = false;
        this.yellow = false;
        this.one = false;
        this.two = false;
        this.three = false;
        this.four = false;
        this.five = false;
        this.cards = [];
        var hint = navParams.get('hint');
        this.blue = hint === 'B';
        this.green = hint === 'G';
        this.red = hint === 'R';
        this.white = hint === 'W';
        this.yellow = hint === 'Y';
        this.one = hint === '1';
        this.two = hint === '2';
        this.three = hint === '3';
        this.four = hint === '4';
        this.five = hint === '5';
        for (var _i = 0, _a = this.game.getHand().getCards(); _i < _a.length; _i++) {
            var card = _a[_i];
            var model = {
                label: card.toString(),
                checked: false
            };
            this.cards.push(model);
        }
    }
    HintPage.prototype.hint = function () {
        var hand = this.game.getHand().getCards();
        for (var i = 0; i < this.cards.length; i++) {
            if (this.blue) {
                hand[i].setBlue(this.cards[i].checked);
            }
            else if (this.green) {
                hand[i].setGreen(this.cards[i].checked);
            }
            else if (this.red) {
                hand[i].setRed(this.cards[i].checked);
            }
            else if (this.white) {
                hand[i].setWhite(this.cards[i].checked);
            }
            else if (this.yellow) {
                hand[i].setYellow(this.cards[i].checked);
            }
            else if (this.one) {
                hand[i].setOne(this.cards[i].checked);
            }
            else if (this.two) {
                hand[i].setTwo(this.cards[i].checked);
            }
            else if (this.three) {
                hand[i].setThree(this.cards[i].checked);
            }
            else if (this.four) {
                hand[i].setFour(this.cards[i].checked);
            }
            else if (this.five) {
                hand[i].setFive(this.cards[i].checked);
            }
        }
        this.navCtrl.pop();
    };
    HintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hint',template:/*ion-inline-start:"C:\Users\Remy\code\mobile\petals\src\pages\hint\hint.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Hint\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let card of cards">\n      <ion-label>{{card.label}}</ion-label>\n      <ion-checkbox [(ngModel)]="card.checked"></ion-checkbox>\n    </ion-item>\n    <button ion-button block (click)="hint()">Hint</button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Remy\code\mobile\petals\src\pages\hint\hint.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_game__["b" /* Game */]])
    ], HintPage);
    return HintPage;
}());

//# sourceMappingURL=hint.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_game__ = __webpack_require__(20);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeckPage = (function () {
    function DeckPage(navCtrl, game) {
        this.navCtrl = navCtrl;
        this.game = game;
        this.deck = game.getDeck();
    }
    DeckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deck',template:/*ion-inline-start:"C:\Users\Remy\code\mobile\petals\src\pages\deck\deck.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Deck\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let card of deck.cards">\n      {{card}}\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\Remy\code\mobile\petals\src\pages\deck\deck.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_game__["b" /* Game */]])
    ], DeckPage);
    return DeckPage;
}());

//# sourceMappingURL=deck.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(221);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

// Add any polyfills you need here!
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Game; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deck__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hand__ = __webpack_require__(267);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */



var Color;
(function (Color) {
    Color[Color["BLUE"] = 0] = "BLUE";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["RED"] = 2] = "RED";
    Color[Color["WHITE"] = 3] = "WHITE";
    Color[Color["YELLOW"] = 4] = "YELLOW";
})(Color || (Color = {}));
var Game = (function () {
    function Game() {
        this.players = [];
        this.played = [];
        this.discarded = [];
    }
    Game.prototype.start = function () {
        this.deck = new __WEBPACK_IMPORTED_MODULE_0__deck__["a" /* Deck */]();
        this.hand = new __WEBPACK_IMPORTED_MODULE_1__hand__["a" /* Hand */](this);
    };
    Game.prototype.contains = function (cards, color, value) {
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            if (card.is(color, value)) {
                return true;
            }
        }
        return false;
    };
    Game.prototype.play = function (card) {
        this.played.push(card);
    };
    Game.prototype.discard = function (card) {
        this.discarded.push(card);
    };
    Game.prototype.isCardSafe = function (color, value) {
        if (value === 5) {
            return false;
        }
        return this.contains(this.played, color, value);
    };
    Game.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    Game.prototype.getPlayers = function () {
        return this.players;
    };
    Game.prototype.setPlayerCount = function (players) {
        this.playerCount = players;
    };
    Game.prototype.getPlayerCount = function () {
        return this.playerCount;
    };
    Game.prototype.getDeck = function () {
        return this.deck;
    };
    Game.prototype.getHand = function () {
        return this.hand;
    };
    return Game;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_hands_hands__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_deck_deck__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_setup_setup__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_playerSetup_playerSetup__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_hint_hint__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_game__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hands_hands__["a" /* HandsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_deck_deck__["a" /* DeckPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hint_hint__["a" /* HintPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_setup_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_playerSetup_playerSetup__["a" /* PlayerSetupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_hands_hands__["a" /* HandsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_deck_deck__["a" /* DeckPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hint_hint__["a" /* HintPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_setup_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_playerSetup_playerSetup__["a" /* PlayerSetupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_game__["b" /* Game */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_setup_setup__ = __webpack_require__(189);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_setup_setup__["a" /* SetupPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
        });
    }
    MyApp.prototype.setPlayers = function (players) {
        this.players = players;
    };
    MyApp.prototype.getPlayers = function () {
        return this.players;
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Remy\code\mobile\petals\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Remy\code\mobile\petals\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__card__ = __webpack_require__(266);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */



var Deck = (function () {
    function Deck() {
        this.cards = [];
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, 5));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, 5));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, 5));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, 5));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 1));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 2));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 3));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 4));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_1__card__["a" /* Card */](__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, 5));
    }
    Deck.prototype.drawString = function (card) {
        switch (card.charAt(0)) {
            case 'B':
                return this.drawCard(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE, parseInt(card.charAt(1)));
            case 'G':
                return this.drawCard(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN, parseInt(card.charAt(1)));
            case 'R':
                return this.drawCard(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED, parseInt(card.charAt(1)));
            case 'W':
                return this.drawCard(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE, parseInt(card.charAt(1)));
            case 'Y':
                return this.drawCard(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW, parseInt(card.charAt(1)));
        }
        return null;
    };
    Deck.prototype.drawCard = function (color, value) {
        for (var i = 0; i < this.cards.length; i++) {
            if (this.cards[i].is(color, value)) {
                var card = this.cards[i];
                this.cards.splice(i, 1);
                return card;
            }
        }
        return null;
    };
    Deck.prototype.hasColor = function (color) {
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.getColor() === color) {
                return true;
            }
        }
        return false;
    };
    Deck.prototype.hasNumber = function (value) {
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.getNumber() === value) {
                return true;
            }
        }
        return false;
    };
    return Deck;
}());

//# sourceMappingURL=deck.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(20);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var Card = (function () {
    function Card(color, value) {
        this.color = color;
        this.value = value;
    }
    Card.prototype.toString = function () {
        switch (this.color) {
            case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE:
                return "Blue " + this.value;
            case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN:
                return "Green " + this.value;
            case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED:
                return "Red " + this.value;
            case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE:
                return "White " + this.value;
            case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW:
                return "Yellow " + this.value;
        }
        return "Unknown";
    };
    Card.prototype.is = function (color, value) {
        return this.color === color && this.value === value;
    };
    Card.prototype.getColor = function () {
        return this.color;
    };
    Card.prototype.getNumber = function () {
        return this.value;
    };
    return Card;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hand; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__unknownCard__ = __webpack_require__(268);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var Hand = (function () {
    function Hand(game) {
        this.game = game;
        this.cards = [];
        var deck = game.getDeck();
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_0__unknownCard__["a" /* UnknownCard */](deck));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_0__unknownCard__["a" /* UnknownCard */](deck));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_0__unknownCard__["a" /* UnknownCard */](deck));
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_0__unknownCard__["a" /* UnknownCard */](deck));
        if (game.getPlayerCount() < 4) {
            this.cards.push(new __WEBPACK_IMPORTED_MODULE_0__unknownCard__["a" /* UnknownCard */](deck));
        }
    }
    Hand.prototype.reorder = function (from, to) {
        var card = this.cards[from];
        this.cards.splice(from, 1);
        this.cards.splice(to, 0, card);
    };
    Hand.prototype.remove = function (card) {
        var index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
        this.cards.push(new __WEBPACK_IMPORTED_MODULE_0__unknownCard__["a" /* UnknownCard */](this.game.getDeck()));
    };
    Hand.prototype.play = function (card, color, value) {
        this.game.play(this.game.getDeck().drawCard(color, value));
        this.remove(card);
    };
    Hand.prototype.discard = function (card, color, value) {
        this.game.discard(this.game.getDeck().drawCard(card.getColor(), card.getNumber()));
        this.remove(card);
    };
    Hand.prototype.update = function () {
        for (var _i = 0, _a = this.cards; _i < _a.length; _i++) {
            var card = _a[_i];
            card.update();
        }
    };
    Hand.prototype.getCards = function () {
        return this.cards;
    };
    return Hand;
}());

//# sourceMappingURL=hand.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnknownCard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(20);
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */


var UnknownCard = (function () {
    function UnknownCard(deck) {
        this.deck = deck;
        this.blue = true;
        this.green = true;
        this.red = true;
        this.white = true;
        this.yellow = true;
        this.one = true;
        this.two = true;
        this.three = true;
        this.four = true;
        this.five = true;
        this.label = "";
        this.label = this.toString();
    }
    UnknownCard.prototype.getColor = function () {
        if (this.isColorConfirmed()) {
            if (this.blue) {
                return __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE;
            }
            else if (this.green) {
                return __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN;
            }
            else if (this.red) {
                return __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED;
            }
            else if (this.white) {
                return __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE;
            }
            return __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW;
        }
        return null;
    };
    UnknownCard.prototype.getColorLabel = function () {
        if (this.isColorConfirmed()) {
            var color = this.getColor();
            switch (color) {
                case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE:
                    return "Blue ";
                case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN:
                    return "Green ";
                case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED:
                    return "Red ";
                case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE:
                    return "White ";
                case __WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW:
                    return "Yellow ";
            }
        }
        return null;
    };
    UnknownCard.prototype.getColors = function () {
        var colors = [];
        if (this.blue) {
            colors.push(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE);
        }
        if (this.green) {
            colors.push(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN);
        }
        if (this.red) {
            colors.push(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED);
        }
        if (this.white) {
            colors.push(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE);
        }
        if (this.yellow) {
            colors.push(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW);
        }
        return colors;
    };
    UnknownCard.prototype.getColorLabels = function () {
        var colors = [];
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
    };
    UnknownCard.prototype.getNumber = function () {
        if (this.isNumberConfirmed()) {
            if (this.one) {
                return 1;
            }
            else if (this.two) {
                return 2;
            }
            else if (this.three) {
                return 3;
            }
            else if (this.four) {
                return 4;
            }
            return 5;
        }
        return null;
    };
    UnknownCard.prototype.getNumbers = function () {
        var numbers = [];
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
    };
    UnknownCard.prototype.isColorConfirmed = function () {
        if (this.blue) {
            return !this.green && !this.red && !this.white && !this.yellow;
        }
        else if (this.green) {
            return !this.red && !this.white && !this.yellow;
        }
        else if (this.red) {
            return !this.white && !this.yellow;
        }
        else if (this.white) {
            return !this.yellow;
        }
        return this.yellow;
    };
    UnknownCard.prototype.isNumberConfirmed = function () {
        if (this.one) {
            return !this.two && !this.three && !this.four && !this.five;
        }
        else if (this.two) {
            return !this.three && !this.four && !this.five;
        }
        else if (this.three) {
            return !this.four && !this.five;
        }
        else if (this.four) {
            return !this.five;
        }
        return this.five;
    };
    UnknownCard.prototype.setBlue = function (blue) {
        this.blue = blue;
        if (blue) {
            this.green = false;
            this.red = false;
            this.white = false;
            this.yellow = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setGreen = function (green) {
        this.green = green;
        if (green) {
            this.blue = false;
            this.red = false;
            this.white = false;
            this.yellow = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setRed = function (red) {
        this.red = red;
        if (red) {
            this.blue = false;
            this.green = false;
            this.white = false;
            this.yellow = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setWhite = function (white) {
        this.white = white;
        if (white) {
            this.blue = false;
            this.green = false;
            this.red = false;
            this.yellow = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setYellow = function (yellow) {
        this.yellow = yellow;
        if (yellow) {
            this.blue = false;
            this.green = false;
            this.red = false;
            this.white = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setOne = function (one) {
        this.one = one;
        if (one) {
            this.two = false;
            this.three = false;
            this.four = false;
            this.five = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setTwo = function (two) {
        this.two = two;
        if (two) {
            this.one = false;
            this.three = false;
            this.four = false;
            this.five = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setThree = function (three) {
        this.three = three;
        if (three) {
            this.one = false;
            this.two = false;
            this.four = false;
            this.five = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setFour = function (four) {
        this.four = four;
        if (four) {
            this.one = false;
            this.two = false;
            this.three = false;
            this.five = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.setFive = function (five) {
        this.five = five;
        if (five) {
            this.one = false;
            this.two = false;
            this.three = false;
            this.four = false;
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.update = function () {
        if (this.blue) {
            this.blue = this.deck.hasColor(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].BLUE);
        }
        if (this.green) {
            this.green = this.deck.hasColor(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].GREEN);
        }
        if (this.red) {
            this.red = this.deck.hasColor(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].RED);
        }
        if (this.white) {
            this.white = this.deck.hasColor(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].WHITE);
        }
        if (this.yellow) {
            this.yellow = this.deck.hasColor(__WEBPACK_IMPORTED_MODULE_0__game__["a" /* Color */].YELLOW);
        }
        if (this.one) {
            this.one = this.deck.hasNumber(1);
        }
        if (this.two) {
            this.two = this.deck.hasNumber(2);
        }
        if (this.three) {
            this.three = this.deck.hasNumber(3);
        }
        if (this.four) {
            this.four = this.deck.hasNumber(4);
        }
        if (this.five) {
            this.five = this.deck.hasNumber(5);
        }
        this.label = this.toString();
    };
    UnknownCard.prototype.toString = function () {
        var value = "";
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
    };
    return UnknownCard;
}());

//# sourceMappingURL=unknownCard.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Remy Suen. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

var Player = (function () {
    function Player(game, name) {
        this.game = game;
        this.name = name;
        this.cards = [];
    }
    Player.prototype.reorder = function (from, to) {
        var card = this.cards[from];
        this.cards.splice(from, 1);
        this.cards.splice(to, 0, card);
    };
    Player.prototype.draw = function (card) {
        this.cards.push(card);
    };
    Player.prototype.drawFromDeck = function (color, value) {
        this.cards.push(this.game.getDeck().drawCard(color, value));
    };
    Player.prototype.play = function (card) {
        this.game.play(card);
        var index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
    };
    Player.prototype.discard = function (card) {
        this.game.discard(card);
        var index = this.cards.indexOf(card);
        this.cards.splice(index, 1);
    };
    return Player;
}());

//# sourceMappingURL=player.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map