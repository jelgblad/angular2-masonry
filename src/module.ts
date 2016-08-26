import { NgModule } from '@angular/core';
import { AngularMasonry } from './masonry';
import { AngularMasonryBrick } from './brick';

const DIRECTIVES = [AngularMasonry, AngularMasonryBrick];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES
})
export class MasonryModule { }