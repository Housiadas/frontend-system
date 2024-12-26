import { AngularSvgIconModule } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { environment } from '@env/environment';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    imports: [AngularSvgIconModule, RouterOutlet],
})
export class AuthComponent implements OnInit {
    appName = environment.appName;

    constructor() {}

    ngOnInit(): void {}
}
