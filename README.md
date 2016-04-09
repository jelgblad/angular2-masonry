# Angular2 component for [Masonry](https://github.com/desandro/masonry)

> angular2-masonry is in development and **not ready for production use**.
> Feel free to install and try it out, but depend on it at your own risk.

## Installation

1. Install package:
  * Through npm: `npm install angular2-masonry --save`

2. Configure module loader:
  * SystemJS:
  Add the following to SystemJS config:
  ```json
  packages: {
    "angular2-masonry": { "defaultExtension": "js" }
  },
  map: {
    "angular2-masonry": "node_modules/angular2-masonry" 
  },
  paths:{
    "masonry": "node_modules/angular2-masonry/node_modules/masonry-layout/dist/masonry.pkgd.min.js"
  }
  ```
  
3. Use in your component:
  
  ```javascript
  import { AngularMasonry } from 'angular2-masonry/angular2-masonry';
  ```
  
  Add `AngularMasonry` to @Component's directives-array and use `<masonry>` in your template:
  
  ```javascript
  @Component({
    selector: 'my-component',
    directives: [AngularMasonry],
    template: `
      <masonry>
        <div class="brick">Brick 1</div>
        <div class="brick">Brick 2</div>
        <div class="brick">Brick 3</div>
        <div class="brick">Brick 4</div>
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
The `options`-property takes an object with the following properties:
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
<masonry [options]="{ itemSelector: '.card', transitionDuration: '0.8s' }"></masonry>
```

From parent component:
```javascript
// Typescript:
import { MasonryOptions } from 'angular2-masonry/angular2-masonry';
public myOptions: MasonryOptions = new MasonryOptions();

this.myOptions.transitionDuration = '0.8s';

// Basic Object:
public myOptions = {
   transitionDuration: '0.8s'
};
```
```html
<masonry [options]="myOptions"></masonry>
```
