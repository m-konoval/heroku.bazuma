import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    // defines
    // *************************************
    private HOST_URL = 'http://localhost:8080/auth';
    private FB_URL = 'http://localhost:8080/auth/facebook';
    private CONTENT_TYPE = { 'Content-type': 'application/json' };

    constructor( private http: HttpClient) {}

    getOwner () {
        return this.http.get(this.HOST_URL);
    }

    fbLogin () {
        const options = {
            headers: new HttpHeaders({ 'Content-type': 'application/json' })
        };

        return this.http.get(this.FB_URL);
    }


}
