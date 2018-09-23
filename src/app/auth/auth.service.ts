import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    // defines
    // *************************************
    private HOST_URL = 'http://localhost:8080/auth';
    private FB_URL = 'http://localhost:8080/auth/facebook';
    private CONTENT_TYPE = { 'Content-type': 'application/json' };

    constructor(private http: HttpClient, private fb: FacebookService) {
        const initParams: InitParams = {
            appId: '888247601368514',
            xfbml: true,
            version: 'v3.1'
        };

        fb.init(initParams);
    }

    loginWithFacebook(): void {

        this.fb.login()
            .then((response: LoginResponse) => console.log(response))
            .catch((error: any) => console.error(error));
    }

    getOwner() {
        return this.http.get(this.HOST_URL);
    }
}
