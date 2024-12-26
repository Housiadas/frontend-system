import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '@app/modules/shell/services/menu.service';
import { SubMenuItemModel } from 'src/app/core/models/menu.model';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-navbar-mobile-submenu',
    templateUrl: './navbar-mobile-submenu.component.html',
    styleUrls: ['./navbar-mobile-submenu.component.scss'],
    imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule, FaIconComponent],
})
export class NavbarMobileSubmenuComponent implements OnInit {
    protected readonly faChevronCircleRight = faChevronCircleRight;
    @Input() public submenu = <SubMenuItemModel>{};

    constructor(private menuService: MenuService) {}

    ngOnInit(): void {}

    public toggleMenu(menu: any) {
        this.menuService.toggleSubMenu(menu);
    }

    private collapse(items: Array<any>) {
        items.forEach((item) => {
            item.expanded = false;
            if (item.children) this.collapse(item.children);
        });
    }

    public closeMobileMenu() {
        this.menuService.showMobileMenu = false;
    }
}
