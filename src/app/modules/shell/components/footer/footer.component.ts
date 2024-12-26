import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
})
export class FooterComponent implements OnInit {
    public appName: string | undefined = environment.appName;
    public year: number = new Date().getFullYear();

    constructor() {}

    ngOnInit(): void {}
}
