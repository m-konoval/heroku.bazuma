import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

const routes: Routes = [
    { path: 'auth', component: AuthComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [AuthComponent],
    providers: [AuthService]
})
export class AuthModule { }
