import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { environment } from '@env/environment';
import { ThemeService } from '@app/core/services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    name: string | undefined = environment.appName;

    constructor(public themeService: ThemeService, private _titleService: Title) {}

    ngOnInit(): void {
        if (this.name != null) {
            this._titleService.setTitle(this.name);
        }
    }
}
