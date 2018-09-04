import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TopLineComponent } from './top-line/top-line.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        NgbModule
    ],
    declarations: [
        HeaderComponent,
        TopLineComponent,
        SliderComponent
    ],
    exports: [
        HeaderComponent
    ]
})
export class HeaderModule { }
