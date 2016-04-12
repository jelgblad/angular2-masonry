import { Component, Input, ElementRef, OnInit } from 'angular2/core';

// import * as masonry from 'masonry-layout';

import { MasonryOptions } from './masonry_options';

@Component({
    selector: 'masonry',
    template: '<ng-content></ng-content>'
})
export class AngularMasonry implements OnInit {

    constructor(
        private _element: ElementRef
    ) { }

    private _msnry = null;

    @Input() public options: MasonryOptions;

    ngOnInit() {
        // Set element display to block
        this._element.nativeElement.style.display = 'block';

        // Initialize Masonry
        this._msnry = new Masonry(this._element.nativeElement, this.options);

        console.log('AngularMasonry:', 'Initialized');
    }

    public add(element, prepend: boolean = false) {
        // Tell Masonry that a child element has been added
        if (prepend) {
            this._msnry.prepend(element);
        }
        else {
            this._msnry.appended(element);
        }

        // Layout items
        this._msnry.layout();
    }

    public remove(element) {
        // Tell Masonry that a child element has been removed
        this._msnry.remove(element);

        setTimeout(x => {
            // Layout items
            this._msnry.layout();
        });
    }
}