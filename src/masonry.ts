declare var require: any;

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
var imagesLoaded = require('imagesloaded');

import { MasonryOptions } from './masonry-options';

@Component({
    selector: '[masonry], masonry',
    template: '<ng-content></ng-content>'
})
export class AngularMasonry implements OnInit, OnDestroy {

    constructor(
        private _element: ElementRef
    ) { }

    private _msnry: any;
    private _imagesLoaded: any;

    // Inputs
    @Input() public options: MasonryOptions;
    @Input() public useImagesLoaded: Boolean = false;

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
        this._msnry.on('layoutComplete', (items: any) => {
            this.layoutComplete.emit(items);
        });
        this._msnry.on('removeComplete', (items: any) => {
            this.removeComplete.emit(items);
        });

        if (this.useImagesLoaded) {
            this._imagesLoaded = imagesLoaded(this._element.nativeElement);
            this._imagesLoaded.on('always', () => {
                this.layout();
            });
        }
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

    // public add(element: HTMLElement, prepend: boolean = false) {
    public add(element: HTMLElement) {
        
        var isFirstItem = false;

        // Check if first item
        if(this._msnry.items.length === 0){
            isFirstItem = true;
        }

        if (this.useImagesLoaded) {
            imagesLoaded(element, (instance: any) => {
                this._element.nativeElement.appendChild(element);
                
                // Tell Masonry that a child element has been added
                this._msnry.appended(element);

                // layout if first item
                if(isFirstItem) this.layout();
            });

            this._element.nativeElement.removeChild(element);
        }
        else {
            // Tell Masonry that a child element has been added
            this._msnry.appended(element);

            // layout if first item
            if (isFirstItem) this.layout();
        }

        // console.log('AngularMasonry:', 'Brick added');
    }

    public remove(element: HTMLElement) {
        // Tell Masonry that a child element has been removed
        this._msnry.remove(element);

        // Layout items
        this.layout();

        // console.log('AngularMasonry:', 'Brick removed');
    }
}