import { Component, Input, ElementRef, AfterViewInit, AfterContentChecked } from 'angular2/core';

@Component({
    selector: 'masonry',
    template: '<div><ng-content></ng-content></div>'
})
export class AngularMasonry implements AfterViewInit, AfterContentChecked {

    private elem = null;
    private msnry = null;
    private itemCount: number;

    // Component inputs
    @Input('item-selector') itemSelector: string = '.brick';
    @Input('origin-left') originLeft: boolean = true;
    @Input('origin-top') originTop: boolean = true;
    @Input() reload: boolean = true;

    constructor(
        private _myElement: ElementRef
    ) { }

    private ngAfterViewInit() {

        this.elem = this._myElement.nativeElement.children[0];

        this.msnry = new Masonry(this.elem, {
            itemSelector: this.itemSelector,
            originLeft: this.originLeft,
            originTop: this.originTop
        });
    }
    
    private ngAfterContentChecked() {
        // Is auto reload enabled?
        if (this.reload === true) {

            // Is component initialized?
            if (this.elem && this.msnry) {

                // Get number of childen in DOM element
                let count = this.elem.children.length;

                // Has items changed?
                if (count !== this.itemCount) {

                    // Get itemCount
                    this.itemCount = count;

                    // Reload items
                    this.reloadItems();
                }
            }
        }
    }
    
    // Reload layout
    public reloadItems() {
        // Reload and layout Masonry
        this.msnry.reloadItems();
        this.msnry.layout();

        console.log('Masonry: reloadItems');
    }
}