import { ElementRef } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';
import { TestBed } from '@angular/core/testing';

const mockElementRef: ElementRef = {
    nativeElement: {
        contains: true,
    },
};

describe('ClickOutsideDirective', () => {
    it('should create an instance', () => {
        const directive = new ClickOutsideDirective(mockElementRef, TestBed.inject(Document));
        expect(directive).toBeTruthy();
    });
});
