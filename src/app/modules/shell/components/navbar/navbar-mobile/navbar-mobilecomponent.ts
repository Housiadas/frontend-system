import { AngularSvgIconModule } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { environment } from '@env/environment';
import { NavbarMobileMenuComponent } from './navbar-mobile-menu/navbar-mobile-menu.component';
import { MenuService } from '@shell/services/menu.service';

@Component({
    selector: 'app-navbar-mobile',
    templateUrl: './navbar-mobile.component.html',
    styleUrls: ['./navbar-mobile.component.scss'],
    imports: [NgClass, AngularSvgIconModule, NavbarMobileMenuComponent],
})
export class NavbarMobileComponent implements OnInit {
    appName = environment.appName;
    constructor(public menuService: MenuService) {}

    ngOnInit(): void {}

    public toggleMobileMenu(): void {
        this.menuService.showMobileMenu = false;
    }
}
