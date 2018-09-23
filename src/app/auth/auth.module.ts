import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { FacebookModule, FacebookService } from 'ngx-facebook';

const routes: Routes = [
    { path: 'auth', component: AuthComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        FacebookModule.forRoot()
    ],
    declarations: [AuthComponent],
    providers: [AuthService, FacebookService]
})
export class AuthModule { }
