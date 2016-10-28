import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainMenuListComponent } from './main-menu-list/main-menu-list.component';
import { InvoiceNumberComponent } from './invoice-number/invoice-number.component';

export const routes: Routes = [
    {
        path: 'a1',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'main-menu',
        component: MainMenuComponent
    },
    {
        path: 'main-menu-list',
        component: MainMenuListComponent
    },
    {
        path: 'invoice-number',
        component: InvoiceNumberComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }