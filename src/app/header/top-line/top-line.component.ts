import { Component, OnInit } from '@angular/core';
import { Socials } from './../../shared/socials';
import { Navigation } from './../../shared/navigation';

@Component({
    selector: 'app-top-line',
    templateUrl: './top-line.component.html',
    styleUrls: ['./top-line.component.less']
})
export class TopLineComponent implements OnInit {
    public nav: object[];
    public socials: object[];

    constructor() { }

    ngOnInit() {
        this.nav = Navigation;
        this.socials = Socials;
    }

}
