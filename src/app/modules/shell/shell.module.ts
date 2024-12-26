import { AngularSvgIconModule } from 'angular-svg-icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({ imports: [AngularSvgIconModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class ShellModule {}
