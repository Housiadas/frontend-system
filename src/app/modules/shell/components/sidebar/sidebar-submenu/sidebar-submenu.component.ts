import { Component, Input, OnInit } from '@angular/core';
import { NgClass, NgFor, NgTemplateOutlet } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

import { MenuService } from '@shell/services/menu.service';
import { SubMenuItem } from 'src/app/core/models/menu.model';

@Component({
    selector: 'app-sidebar-submenu',
    templateUrl: './sidebar-submenu.component.html',
    styleUrls: ['./sidebar-submenu.component.scss'],
    standalone: true,
    imports: [NgClass, NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, AngularSvgIconModule, FaIconComponent],
})
export class SidebarSubmenuComponent implements OnInit {
    protected readonly faChevronCircleRight = faChevronCircleRight;

    @Input() public submenu = <SubMenuItem>{};

    constructor(public menuService: MenuService) {}

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
}
