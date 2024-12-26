import { Observable, of } from 'rxjs';

import { LoginContext } from './auth.service';
import { Credentials } from './credentials.service';

export class MockAuthenticationService {
    credentials: Credentials | null = {
        email: 'test',
        password: '123',
    };

    login(context: LoginContext): Observable<Credentials> {
        return of({
            email: context.email,
            password: '123456',
        });
    }

    logout(): Observable<boolean> {
        this.credentials = null;
        return of(true);
    }
}
