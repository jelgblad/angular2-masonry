interface MutationWindow extends Window {
    MutationObserver: any;
    WebKitMutationObserver: any;
}

declare var window: MutationWindow;

import {
    Directive,
    Inject,
    ElementRef,
    forwardRef,
    OnDestroy,
    AfterViewInit
} from '@angular/core';

import { AngularMasonry } from './masonry';
import elementResizeDetectorMaker  from 'element-resize-detector';

@Directive({
    selector: '[masonry-brick], masonry-brick'
})
export class AngularMasonryBrick implements OnDestroy, AfterViewInit {

    constructor(
        private _element: ElementRef,
        @Inject(forwardRef(() => AngularMasonry)) private _parent: AngularMasonry
    ) { }

    ngAfterViewInit() {
        this._parent.add(this._element.nativeElement);
        this.watchForHtmlChanges();
    }

    ngOnDestroy() {
        this._parent.remove(this._element.nativeElement);
    }

    /** When HTML in brick changes dinamically, observe that and change layout */
    private watchForHtmlChanges(): void {
        let self = this;
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

        if (MutationObserver) {
            /** Watch for any changes to subtree */
            let subtreeObserver = new MutationObserver(function(mutations, observerFromElement) {
                self._parent.layout();
            });

            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            subtreeObserver.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }

        let DimensionsObserver = elementResizeDetectorMaker();
        DimensionsObserver.listenTo( this._element.nativeElement, element => {
            self._parent.layout();
        })

    }
}
