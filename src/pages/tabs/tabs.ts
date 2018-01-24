import { Component } from '@angular/core';

import { HandsPage } from '../hands/hands';
import { DeckPage } from '../deck/deck';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HandsPage;
    tab2Root = DeckPage;
}
