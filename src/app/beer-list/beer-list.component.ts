import { Component } from '@angular/core';
import { beers } from '../db/beers'

@Component({
    selector: "app-beer-list",
    templateUrl: "./beer-list.component.html",
    styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent {
    beers = beers;
    constructor() {}
}