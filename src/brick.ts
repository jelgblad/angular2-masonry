import { Component, Inject, Input, ElementRef, forwardRef, OnInit, OnDestroy, AfterViewInit } from 'angular2/core';

import { AngularMasonry } from './masonry';

@Component({
    selector: 'masonry-brick',
    template: '<ng-content></ng-content>',
    styles: [`
        .root { display: block; }
    `]
})
export class AngularMasonryBrick implements OnInit, OnDestroy, AfterViewInit {

    constructor(
        private _element: ElementRef,
        @Inject(forwardRef(() => AngularMasonry)) private _parent: AngularMasonry
    ) { }

    ngOnInit() {

    }

    ngAfterViewInit() {

        // imagesLoaded(this._element.nativeElement, function(instance) {
        //     console.log('all images are loaded');
        // });

        this._parent.add(this._element.nativeElement);
    }

    ngOnDestroy() {
        this._parent.remove(this._element.nativeElement);
    }
}
