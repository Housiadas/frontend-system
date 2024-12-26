import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgFor, NgClass, NgTemplateOutlet, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { SubMenuItem } from 'src/app/core/models/menu.model';
import { SidebarSubmenuComponent } from '../sidebar-submenu/sidebar-submenu.component';
import { MenuService } from '@shell/services/menu.service';

@Component({
    selector: 'app-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgFor,
        NgClass,
        NgTemplateOutlet,
        RouterLink,
        RouterLinkActive,
        NgIf,
        SidebarSubmenuComponent,
        FontAwesomeModule,
    ],
})
export class SidebarMenuComponent implements OnInit {
    protected readonly faChevronCircleRight = faChevronCircleRight;

    constructor(public menuService: MenuService) {}

    public toggleMenu(subMenu: SubMenuItem) {
        this.menuService.toggleMenu(subMenu);
    }

    ngOnInit(): void {}
}
