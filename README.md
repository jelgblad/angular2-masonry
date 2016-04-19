# Angular2 component for [Masonry](https://github.com/desandro/masonry)

[![npm version](https://badge.fury.io/js/angular2-masonry.svg)](https://www.npmjs.com/package/angular2-masonry)

> angular2-masonry is in development and **not ready for production use**.
> Feel free to install and try it out, but depend on it at your own risk.

## Installation

Install package:
 * Through npm: `npm install angular2-masonry --save`
 
Configure module loader:
 * SystemJS:
 Add the following to SystemJS config:
 ```json
 packages: {
   "angular2-masonry": { "defaultExtension": "js", "main": "angular2-masonry" }
 },
 map: {
   "angular2-masonry": "node_modules/angular2-masonry" 
 }
 ```
 
Include Masonry in HTML: 

```html
<script src="node_modules/masonry-layout/dist/masonry.pkgd.min.js"></script>
```

Use in your component:
 ```javascript
 import { MASONRY_DIRECTIVES } from 'angular2-masonry';
 ```
  
 Add `MASONRY_DIRECTIVES` to @Component's directives-array and use `<masonry>` and `<masonry-brick>` in your template:
  
 ```javascript
 @Component({
   selector: 'my-component',
   directives: [MASONRY_DIRECTIVES],
   template: `
     <masonry>
       <masonry-brick class="brick">Brick 1</masonry-brick>
       <masonry-brick class="brick">Brick 2</masonry-brick>
       <masonry-brick class="brick">Brick 3</masonry-brick>
       <masonry-brick class="brick">Brick 4</masonry-brick>
     </masonry>
     `,
     styles: [`
       .brick { width: 200px; }
     `]
 })
 ```
 
## Configuration

Read about Masonry options here: http://masonry.desandro.com/options.html

#### Options
The `options`-attribute takes an object with the following properties:
* itemSelector: string;
* columnWidth: number;
* gutter: number;
* percentPosition: boolean;
* stamp: string;
* fitWidth: boolean;
* originLeft: boolean;
* originTop: boolean;
* containerStyle: string;
* transitionDuration: string;
* resize: boolean;
* initLayout: boolean;

#### Examples

Inline object:
```html
<masonry [options]="{ transitionDuration: '0.8s' }"></masonry>
```

From parent component:
```javascript
// Typescript interface:
import { MasonryOptions } from 'angular2-masonry';

public myOptions: MasonryOptions = { 
  transitionDuration: '0.8s' 
};

// Basic object:
public myOptions = {
   transitionDuration: '0.8s'
};
```
```html
<masonry [options]="myOptions"></masonry>
```
