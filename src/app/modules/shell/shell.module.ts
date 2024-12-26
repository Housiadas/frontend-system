import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [HttpClientModule, AngularSvgIconModule.forRoot()],
})
export class ShellModule {}
