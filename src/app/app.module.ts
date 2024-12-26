import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgClass } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AuthModule } from '@app/modules/auth/auth.module';
import { DashboardModule } from '@app/modules/dashboard/dashboard.module';
import { ShellModule } from '@shell/shell.module';
import { ResponsiveHelperComponent } from '@shared/components/responsive-helper/responsive-helper.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from '@app/modules/users/users.module';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        AuthModule,
        BrowserModule,
        DashboardModule,
        FormsModule,
        NgClass,
        ResponsiveHelperComponent,
        RouterModule,
        RouterOutlet,
        ShellModule,
        UsersModule,
        AppRoutingModule,
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
