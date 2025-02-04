import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgTemplateOutlet, NgIf } from '@angular/common';
import { RouterLinkActive, RouterLink } from '@angular/router';

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons/faChevronCircleLeft';

import { SubMenuItemModel } from 'src/app/core/models/menu.model';

@Component({
    selector: 'div[navbar-submenu]',
    templateUrl: './navbar-submenu.component.html',
    styleUrls: ['./navbar-submenu.component.scss'],
    imports: [NgFor, NgTemplateOutlet, RouterLinkActive, RouterLink, NgIf, FaIconComponent],
})
export class NavbarSubmenuComponent implements OnInit {
    protected readonly faChevronCircleLeft = faChevronCircleLeft;
    @Input() public submenu = <SubMenuItemModel[]>{};

    constructor() {}

    ngOnInit(): void {}
}
