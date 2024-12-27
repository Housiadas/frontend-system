import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { CredentialsService, Credentials } from './credentials.service';
import { MockCredentialsService } from './credentials.service.mock';

describe('AuthService', () => {
    let AuthService: AuthService;
    let credentialsService: MockCredentialsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [{ provide: CredentialsService, useClass: MockCredentialsService }, AuthService],
        });

        // @ts-ignore
        AuthService = TestBed.inject(AuthService);
        credentialsService = TestBed.inject(CredentialsService);
        credentialsService.credentials = null;
        jest.spyOn(credentialsService, 'setCredentials');
    });

    describe('login', () => {
        it('should return credentials', fakeAsync(() => {
            // Act
            const request = AuthService.login({
                email: 'toto',
                password: '123',
            });
            tick();

            // Assert
            request.subscribe((credentials) => {
                expect(credentials).toBeDefined();
                expect(credentials.password).toBeDefined();
            });
        }));

        it('should authenticate user', fakeAsync(() => {
            expect(credentialsService.isAuthenticated()).toBe(false);

            // Act
            const request = AuthService.login({
                email: 'toto',
                password: '123',
            });
            tick();

            // Assert
            request.subscribe(() => {
                expect(credentialsService.isAuthenticated()).toBe(true);
                expect(credentialsService.credentials).not.toBeNull();
                expect((credentialsService.credentials as Credentials).password).toBeDefined();
                expect((credentialsService.credentials as Credentials).password).not.toBeNull();
            });
        }));

        it('should persist credentials for the session', fakeAsync(() => {
            // Act
            const request = AuthService.login({
                email: 'toto',
                password: '123',
            });
            tick();

            // Assert
            request.subscribe(() => {
                expect(credentialsService.setCredentials).toHaveBeenCalled();
                expect((credentialsService.setCredentials as jest.Mock).mock.calls[0][1]).toBe(undefined);
            });
        }));

        it('should persist credentials across sessions', fakeAsync(() => {
            // Act
            const request = AuthService.login({
                email: 'toto',
                password: '123',
                remember: true,
            });
            tick();

            // Assert
            request.subscribe(() => {
                expect(credentialsService.setCredentials).toHaveBeenCalled();
                expect((credentialsService.setCredentials as jest.Mock).mock.calls[0][1]).toBe(true);
            });
        }));
    });

    describe('logout', () => {
        it('should clear user authentication', fakeAsync(() => {
            // Arrange
            const loginRequest = AuthService.login({
                email: 'toto',
                password: '123',
            });
            tick();

            // Assert
            loginRequest.subscribe(() => {
                expect(credentialsService.isAuthenticated()).toBe(true);

                const request = AuthService.logout();
                tick();

                request.subscribe(() => {
                    expect(credentialsService.isAuthenticated()).toBe(false);
                    expect(credentialsService.credentials).toBeNull();
                });
            });
        }));
    });
});
