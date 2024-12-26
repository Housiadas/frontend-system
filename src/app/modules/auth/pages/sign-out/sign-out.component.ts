import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { AuthService } from '@app/modules/auth/services';
import { Logger } from '@app/core/services/logger.service';

const log = new Logger();

@Component({
    selector: 'app-sign-out',
    templateUrl: './sign-out.component.html',
    standalone: true,
    imports: [RouterLink],
})
export class SignOutComponent implements OnInit {
    error: string | undefined;

    constructor(private readonly _authService: AuthService, private readonly _router: Router) {}

    ngOnInit(): void {
        this._authService.logout();
        this._router.navigate(['/auth/sign-in']);
    }
}
