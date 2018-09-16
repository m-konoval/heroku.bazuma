import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.less']
})
export class AuthComponent implements OnInit {

    public result;

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    loginfb() {
        this.authService.fbLogin().subscribe((res) => {
            console.log(res);

            this.result = res;
        });
    }

}
