import { Component, Input, ElementRef, OnInit } from 'angular2/core';

// import * as masonry from 'masonry-layout';

import { MasonryOptions } from './masonry_options';

@Component({
    selector: 'masonry',
    template: '<div class="{{containerClass}}" style="{{containerStyle}}"><ng-content></ng-content></div>'
})
export class AngularMasonry implements OnInit {

    constructor(
        private _componentElement: ElementRef
    ) { }

    private _elem = null;
    private _msnry = null;

    @Input() public options: MasonryOptions;
    @Input('container-style') public containerStyle: string = 'position: relative;';
    @Input('container-class') public containerClass: string = '';

    ngOnInit() {

        // console.log(masonry);

        // Reference to the Masonry-div
        this._elem = this._componentElement.nativeElement.children[0];

        // Initialize Masonry
        this._msnry = new Masonry(this._elem, this.options);

        console.log('AngularMasonry:', 'Initialized');

        // console.log(this._msnry);
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

        // Hack...
        setTimeout(x => {
            // Layout items
            this._msnry.layout();
        });
    }
}