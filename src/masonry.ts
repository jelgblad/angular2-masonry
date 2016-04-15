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
        // Create masonry options if not supplied
        if (!this.options) this.options = new MasonryOptions();
        
        // Set default itemSelector to 'masonry-brick'
        if (!this.options.itemSelector) {
            this.options.itemSelector = 'masonry-brick';
        }

        // Set element display to block
        this._element.nativeElement.style.display = 'block';

        // Initialize Masonry
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