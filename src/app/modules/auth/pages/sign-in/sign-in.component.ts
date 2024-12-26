import { AngularSvgIconModule } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NgClass, NgIf } from '@angular/common';
import { finalize } from 'rxjs';

import { AuthService, Credentials } from '@app/modules/auth/services';
import { Logger } from '@app/core/services/logger.service';

const log = new Logger();

@UntilDestroy()
@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf],
})
export class SignInComponent implements OnInit {
    form!: FormGroup;
    error: string | undefined;
    isLoading = false;
    submitted = false;
    passwordTextType!: boolean;

    constructor(
        private readonly _authService: AuthService,
        private readonly _route: ActivatedRoute,
        private readonly _router: Router,
        private readonly _formBuilder: FormBuilder,
    ) {}

    ngOnInit(): void {
        this.form = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
        });
    }

    get f() {
        return this.form.controls;
    }

    togglePasswordTextType() {
        this.passwordTextType = !this.passwordTextType;
    }

    onSubmit() {
        this.submitted = true;
        this.isLoading = true;

        console.log(this.form.controls);
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        const login$ = this._authService.login(this.form.value);
        login$
            .pipe(
                finalize(() => {
                    this.form.markAsPristine();
                    this.isLoading = false;
                }),
                untilDestroyed(this),
            )
            .subscribe(
                (credentials: Credentials) => {
                    log.debug(`[Login] ${credentials.email} successfully logged in`);
                    this._router.navigate([this._route.snapshot.queryParams['redirect'] || '/'], { replaceUrl: true });
                },
                (error) => {
                    log.debug(`Login error: ${error}`);
                    this.error = error;
                },
            );
    }
}
