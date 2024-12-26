import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ThemeService } from 'src/app/core/services/theme.service';
import { MenuService } from '../../services/menu.service';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgClass, NgIf } from '@angular/common';

import { environment } from '@env/environment';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons/faChevronCircleLeft';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: true,
    imports: [NgClass, NgIf, AngularSvgIconModule, SidebarMenuComponent, RouterLink, FaIconComponent],
})
export class SidebarComponent implements OnInit {
    public appName: string | undefined = environment.appName;
    public version: string | null = environment.version;

    constructor(public themeService: ThemeService, public menuService: MenuService) {}

    ngOnInit(): void {}

    public toggleSidebar() {
        this.menuService.toggleSidebar();
    }

    toggleTheme() {
        this.themeService.theme = !this.themeService.isDark ? 'dark' : 'light';
    }

    protected readonly faChevronCircleRight = faChevronCircleRight;
    protected readonly faChevronCircleLeft = faChevronCircleLeft;
}
