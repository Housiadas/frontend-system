import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    standalone: true,
    imports: [RouterOutlet],
})
export class UsersComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
