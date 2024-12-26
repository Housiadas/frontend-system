import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Shell } from '@shell/services/shell.service';

import { IndexComponent } from '@app/modules/users/pages/index/index.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    Shell.childRoutes([
        {
            path: 'users',
            component: UsersComponent,
            children: [
                { path: '', component: IndexComponent },
                { path: '**', redirectTo: 'error/404' },
            ],
        },
    ]),
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
