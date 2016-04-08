import { Component, Input, ElementRef, AfterViewInit, AfterContentChecked } from 'angular2/core';

/**
 * MasonryOptions
 */
export class MasonryOptions {
    itemSelector: string = '.brick';
    columnWidth: number;
    gutter: number;
    percentPosition: boolean;
    stamp: string;
    fitWidth: boolean;
    originLeft: boolean;
    originTop: boolean;
    containerStyle: string;
    transitionDuration: string = '0.4s';
    resize: boolean;
    initLayout: boolean;
}

@Component({
    selector: 'masonry',
    template: '<div><ng-content></ng-content></div>'
})
export class AngularMasonry implements AfterViewInit, AfterContentChecked {

    constructor(
        private _componentElement: ElementRef
    ) { }

    private _elem = null;
    private _msnry = null;
    private _itemCount: number;

    @Input() public options: MasonryOptions;
    @Input('reload') autoReload: boolean = true;

    private ngAfterViewInit() {
        this._elem = this._componentElement.nativeElement.children[0];
        this._msnry = new Masonry(this._elem, this.options);
        
        // console.log(this._msnry);
    }

    private ngAfterContentChecked() {
        // Is auto reload enabled?
        if (this.autoReload === true) {

            // Is component initialized?
            if (this._elem && this._msnry) {

                // Get number of childen in DOM element
                let count = this._elem.children.length;

                // Has items changed?
                if (count !== this._itemCount) {

                    // Get itemCount
                    this._itemCount = count;

                    // Reload items
                    this.reloadItems();
                }
            }
        }
    }

    // Reload layout
    public reloadItems() {

        // Reload and layout Masonry
        this._msnry.reloadItems();
        this._msnry.layout();

        console.log('AngularMasonry: reloadItems');
    }
}