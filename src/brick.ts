import { Directive, Inject, ElementRef, forwardRef, OnDestroy, AfterViewInit } from '@angular/core';

import { AngularMasonry } from './masonry';

@Directive({
    selector: '[masonry-brick], masonry-brick'
})
export class AngularMasonryBrick implements OnDestroy, AfterViewInit {

    constructor(
        private _element: ElementRef,
        @Inject(forwardRef(() => AngularMasonry)) private _parent: AngularMasonry
    ) { }

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
