import { Component, Input, ElementRef, OnInit } from '@angular/core';

import * as Masonry from 'masonry-layout';

import { MasonryOptions } from './masonry_options';

@Component({
    selector: '[masonry], masonry',
    template: '<ng-content></ng-content>'
})
export class AngularMasonry implements OnInit {

    constructor(
        private _element: ElementRef
    ) { }

    private _msnry = null;

    @Input() public options: MasonryOptions;

    ngOnInit() {
        // Create masonry options object
        if (!this.options) this.options = {};

        // Set default itemSelector
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[masonry-brick], masonry-brick';
        }

        // Set element display to block
        if (this._element.nativeElement.tagName === 'MASONRY') {
            this._element.nativeElement.style.display = 'block';
        }
        
        // Initialize Masonry
        //this._msnry = new masonry.default(this._element.nativeElement, this.options);
        this._msnry = new Masonry(this._element.nativeElement, this.options);

        // console.log('AngularMasonry:', 'Initialized');
    }

    public layout() {
        setTimeout(() => {
            this._msnry.layout();
        });

        // console.log('AngularMasonry:', 'Layout');
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
        this.layout();

        // console.log('AngularMasonry:', 'Brick added');
    }

    public remove(element) {
        // Tell Masonry that a child element has been removed
        this._msnry.remove(element);

        // Layout items
        this.layout();

        // console.log('AngularMasonry:', 'Brick removed');
    }
}
