import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MenuList } from './../../shared/menu';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.less'],
    providers: [NgbCarouselConfig]
})
export class SliderComponent implements OnInit {
    public slides: object[];
    public currentSlide;

    constructor(carousel: NgbCarouselConfig) {
        carousel.showNavigationArrows = false;
        carousel.showNavigationIndicators = false;
    }


    ngOnInit() {
        this.slides = MenuList;
    }


    public goToTopic (it, ind) {
        console.log(it, ind);
    }

}
