import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Shell } from '@shell/services/shell.service';
import { HomeComponent } from '@app/modules/dashboard/pages/home/home.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    Shell.childRoutes([
        {
            path: '',
            component: DashboardComponent,
            children: [
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: HomeComponent },
                { path: '**', redirectTo: 'error/404' },
            ],
        },
    ]),
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DashboardRoutingModule {}
