import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

import { CredentialsService } from '@app/modules/auth/services/credentials.service';
import { MockCredentialsService } from '@app/modules/auth/services/credentials.service.mock';
import { AuthGuard } from './auth.guard';

describe('AuthenticationGuard', () => {
    let authenticationGuard: AuthGuard;
    let credentialsService: MockCredentialsService;
    let mockRouter: any;
    let mockSnapshot: any;

    beforeEach(() => {
        mockRouter = {
            navigate: jest.fn(),
        };
        mockSnapshot = jest.fn(() => ({
            toString: jest.fn(),
        }));

        TestBed.configureTestingModule({
            providers: [
                AuthGuard,
                { provide: CredentialsService, useClass: MockCredentialsService },
                { provide: Router, useValue: mockRouter },
            ],
        });

        authenticationGuard = TestBed.inject(AuthGuard);
        credentialsService = TestBed.inject(CredentialsService);
    });

    it('should have a canActivate method', () => {
        expect(typeof authenticationGuard.canActivate).toBe('function');
    });

    it('should return true if user is authenticated', () => {
        expect(authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot)).toBe(true);
    });

    it('should return false and redirect to login if user is not authenticated', () => {
        // Arrange
        credentialsService.credentials = null;

        // Act
        const result = authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);

        // Assert
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
            queryParams: { redirect: undefined },
            replaceUrl: true,
        });
        expect(result).toBe(false);
    });

    it('should save url as queryParam if user is not authenticated', () => {
        credentialsService.credentials = null;
        mockRouter.url = '/about';
        mockSnapshot.url = '/about';

        authenticationGuard.canActivate(new ActivatedRouteSnapshot(), mockSnapshot);
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/login'], {
            queryParams: { redirect: mockRouter.url },
            replaceUrl: true,
        });
    });
});
