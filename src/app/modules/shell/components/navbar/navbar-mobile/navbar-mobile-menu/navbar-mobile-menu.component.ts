import { Component, OnInit } from '@angular/core';
import { SubMenuItemModel } from 'src/app/core/models/menu.model';
import { MenuService } from '@app/modules/shell/services/menu.service';
import { NavbarMobileSubmenuComponent } from '../navbar-mobile-submenu/navbar-mobile-submenu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-navbar-mobile-menu',
    templateUrl: './navbar-mobile-menu.component.html',
    styleUrls: ['./navbar-mobile-menu.component.scss'],
    imports: [
        NgFor,
        NgClass,
        AngularSvgIconModule,
        NgTemplateOutlet,
        RouterLink,
        RouterLinkActive,
        NgIf,
        NavbarMobileSubmenuComponent,
        FaIconComponent,
    ],
})
export class NavbarMobileMenuComponent implements OnInit {
    protected readonly faChevronCircleRight = faChevronCircleRight;

    constructor(public menuService: MenuService) {}

    public toggleMenu(subMenu: SubMenuItemModel) {
        this.menuService.toggleMenu(subMenu);
    }

    public closeMenu() {
        this.menuService.showMobileMenu = false;
    }

    ngOnInit(): void {}
}
