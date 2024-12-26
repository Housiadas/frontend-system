import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    // {
    //   path: 'auth',
    //   loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    // },
    // { path: '**', redirectTo: 'error/404' },
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}