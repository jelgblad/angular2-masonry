import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import { AngularMasonry } from 'angular2-masonry';

@Component({
    selector: 'my-app',
    directives: [AngularMasonry],
    template: `
        <h1>{{title}}</h1>
        
        <div>
            <button (click)="addItem()">Add item</button>
            <button (click)="removeRandomItem()">Remove random item</button>
            <button (click)="clearItems()">Clear items</button>
            <button (click)="masonry.reloadItems()">Reload items</button>
        </div>
        
        <masonry #masonry>
            <div class="brick" *ngFor="#brick of bricks">{{brick}}</div>
        </masonry>
        `
})
export class AppComponent {

    title: string = 'Angular2 masonry';

    bricks: string[] = [];

    addItem() {
        var index = Math.floor(Math.random() * (loremIpsum.length - 1));

        this.bricks.push(loremIpsum[index]);
    }

    removeRandomItem() {
        var index = Math.floor(Math.random() * (this.bricks.length - 1));

        this.bricks.splice(index, 1);
    }

    clearItems() {
        this.bricks = [];
    }
}

bootstrap(AppComponent);


// Text
var loremIpsum = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis eros. Maecenas sollicitudin pharetra orci quis mattis. Morbi non.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra blandit ultricies. Quisque at dapibus elit. Nullam pharetra lorem et.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum tortor, pellentesque quis feugiat et, lacinia sit amet lorem. Morbi pulvinar diam fermentum urna elementum, eu mollis urna rutrum. Donec vel neque malesuada, porta erat et, laoreet turpis. Curabitur vel porta elit, sed molestie elit. Phasellus scelerisque scelerisque lectus, sed.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo neque tempor, aliquam odio a, sollicitudin lacus. Morbi ut justo nisi. Quisque convallis, nisl ac gravida semper, nisi turpis maximus felis, non gravida ex mi eu metus. Vestibulum semper venenatis viverra. Nulla volutpat lacinia scelerisque. Nunc efficitur dolor non imperdiet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet odio aliquam, egestas urna non, vehicula dui. In at rhoncus erat. Maecenas convallis porta enim et varius. Nulla ut.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium.',
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum metus id faucibus placerat. Sed at fermentum dolor, id ultricies.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et erat tempus, varius dolor at, congue erat. Donec scelerisque ullamcorper.'
]