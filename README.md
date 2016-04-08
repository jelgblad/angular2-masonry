Angular2 component for [Masonry](https://github.com/desandro/masonry)
==========

> angular2-masonry is in development and **not ready for production use**.
> Feel free to install and try it out, but depend on it at your own risk.

Installation
----------

1. Install package:
  * Through npm: `npm install angular2-masonry --save`


2. Configure module loader:
  * SystemJS:
  Add the following to SystemJS config:
  ```json
  packages: {
    "angular2-masonry": { "defaultExtension": "js" }
  }
  map: {
    "angular2-masonry": "node_modules/angular2-masonry" 
  }
  ```


3. Include Masonry in your HTML:
  
  ```html
  <script src="https://npmcdn.com/masonry-layout@4.0/dist/masonry.pkgd.min.js"></script>
  ```


4. Use in your component:
  
  ```javascript
  import { AngularMasonry } from 'angular2-masonry/angular2-masonry';
  ```
  
  Add `AngularMasonry` to @Component's directives-array and use `<masonry></masonry>` in your template:
  
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
