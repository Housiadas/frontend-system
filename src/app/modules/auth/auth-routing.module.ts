import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import {
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    TwoStepsComponent,
    NewPasswordComponent,
    ForgotPasswordComponent,
} from '@app/modules/auth/pages';

const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
            { path: 'sign-in', component: SignInComponent, data: { returnUrl: window.location.pathname } },
            { path: 'sign-up', component: SignUpComponent },
            { path: 'sign-out', component: SignOutComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'new-password', component: NewPasswordComponent },
            { path: 'two-steps', component: TwoStepsComponent },
            { path: '**', redirectTo: 'sign-in', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
