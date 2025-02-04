import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.scss'],
    imports: [FormsModule, RouterLink, AngularSvgIconModule],
})
export class NewPasswordComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
