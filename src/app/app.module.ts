import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    imports: [
        AuthModule,
        BrowserModule,
        DashboardModule,
        FormsModule,
        HttpClientModule,
        NgClass,
        ResponsiveHelperComponent,
        RouterModule,
        RouterOutlet,
        ShellModule,
        UsersModule,
        AppRoutingModule, // must be imported as the last module as it contains the fallback route
    ],
    declarations: [AppComponent],
    providers: [
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: ApiPrefixInterceptor,
        //   multi: true,
        // },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: ErrorHandlerInterceptor,
        //   multi: true,
        // },
        // {
        //   provide: RouteReuseStrategy,
        //   useClass: RouteReusableStrategy,
        // },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
