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