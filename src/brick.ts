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
        private _componentElement: ElementRef,
        @Inject(forwardRef(() => AngularMasonry)) private _parent: AngularMasonry
    ) { }

    ngOnInit() {

    }

    ngAfterViewInit() {

        // imagesLoaded(this._componentElement.nativeElement, function(instance) {
        //     console.log('all images are loaded');
        // });

        this._parent.add(this._componentElement.nativeElement);

        console.log('AngularMasonry:', 'Brick added');
    }

    ngOnDestroy() {
        this._parent.remove(this._componentElement.nativeElement);

        console.log('AngularMasonry:', 'Brick removed');
    }
}