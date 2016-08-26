# [Masonry](https://github.com/desandro/masonry) module for Angular2

[![npm version](https://badge.fury.io/js/angular2-masonry.svg)](https://www.npmjs.com/package/angular2-masonry)

> angular2-masonry is in development and **not ready for production use**.
> Feel free to install and try it out, but depend on it at your own risk.

## Installation

`npm install angular2-masonry --save`
 
If you're using SystemJS add `angular2-masonry` and `masonry-layout` to your configuration:
```json
packages: {
  "angular2-masonry": { "defaultExtension": "js", "main": "index" }
},
map: {
  "angular2-masonry": "node_modules/angular2-masonry",
  "masonry-layout": "node_modules/masonry-layout/dist/masonry.pkgd.js"
}
```

## Usage

### Angular RC 5 and later

Import `MasonryModule` into your app's modules:

``` typescript
import { MasonryModule } from 'angular2-masonry';

@NgModule({
  imports: [
    MasonryModule
  ]
})
```

### Angular RC 4 and earlier
Use version 0.0.20 or earlier.

Use `<masonry>` and `<masonry-brick>` in your template:
  
 ```javascript
 @Component({
   selector: 'my-component',
   template: `
     <masonry>
       <masonry-brick class="brick" *ngFor="let brick of bricks">{{brick.title}}</masonry-brick>
     </masonry>
     `,
     styles: [`
       .brick { width: 200px; }
     `]
 })
 class MyComponent {
   bricks = [
     {title: 'Brick 1'},
     {title: 'Brick 2'},
     {title: 'Brick 3'},
     {title: 'Brick 4'},
     {title: 'Brick 5'},
     {title: 'Brick 6'}
   ]
 }
 ```
 
## Configuration

Read about Masonry options here: http://masonry.desandro.com/options.html

### Options
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
import { MasonryOptions } from 'angular2-masonry';

public myOptions: MasonryOptions = { 
  transitionDuration: '0.8s' 
};
```
```html
<masonry [options]="myOptions"></masonry>
```
