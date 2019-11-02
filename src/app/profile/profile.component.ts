import { Component } from '@angular/core';
import { profiles } from '../db/profiles'

@Component({
    selector: 'app-profile-component', 
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
    profile = profiles[0]
    constructor() {}

}