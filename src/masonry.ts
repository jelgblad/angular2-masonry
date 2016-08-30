import {
    Component,
    OnInit,
    OnDestroy,
    Input,
    Output,
    ElementRef,
    EventEmitter,
} from '@angular/core';

// import * as masonry from 'masonry-layout';
var masonry = require('masonry-layout');

import { MasonryOptions } from './masonry-options';

@Component({
    selector: '[masonry], masonry',
    template: '<ng-content></ng-content>'
})
export class AngularMasonry implements OnInit, OnDestroy {

    constructor(
        private _element: ElementRef
    ) { }

    private _msnry = null;

    // Inputs
    @Input() public options: MasonryOptions;

    // Outputs
    @Output() layoutComplete: EventEmitter<any[]> = new EventEmitter<any[]>();
    @Output() removeComplete: EventEmitter<any[]> = new EventEmitter<any[]>();

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
        this._msnry = new masonry(this._element.nativeElement, this.options);

        // console.log('AngularMasonry:', 'Initialized');

        // Bind to events
        this._msnry.on('layoutComplete', items => {
            this.layoutComplete.emit(items);
        });
        this._msnry.on('removeComplete', items => {
            this.removeComplete.emit(items);
        });
    }

    ngOnDestroy() {
        if (this._msnry) {
            this._msnry.destroy();
        }
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