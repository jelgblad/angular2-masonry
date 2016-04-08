import { Component, Input, ElementRef, AfterViewInit, AfterContentChecked } from 'angular2/core';

@Component({
    selector: 'masonry',
    template: '<div><ng-content></ng-content></div>'
})
export class AngularMasonry implements AfterViewInit, AfterContentChecked {

    private _elem = null;
    private _msnry = null;
    private _itemCount: number;

    // Component inputs
    @Input('item-selector') itemSelector: string = '.brick';
    @Input('origin-left') originLeft: boolean = true;
    @Input('origin-top') originTop: boolean = true;
    @Input('reload') autoReload: boolean = true;

    constructor(
        private _componentElement: ElementRef
    ) { }

    private ngAfterViewInit() {

        this._elem = this._componentElement.nativeElement.children[0];

        this._msnry = new Masonry(this._elem, {
            itemSelector: this.itemSelector,
            originLeft: this.originLeft,
            originTop: this.originTop
        });
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