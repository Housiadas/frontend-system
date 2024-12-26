import { AngularSvgIconModule } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { MenuService } from '../../services/menu.service';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [AngularSvgIconModule, NavbarMenuComponent, ProfileMenuComponent, NavbarMobileComponent],
})
export class NavbarComponent implements OnInit {
    appName = environment.appName;
    constructor(private menuService: MenuService) {}

    ngOnInit(): void {}

    public toggleMobileMenu(): void {
        this.menuService.showMobileMenu = true;
    }
}
