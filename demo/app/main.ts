import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

import { MASONRY_DIRECTIVES } from 'angular2-masonry';

@Component({
    selector: 'my-app',
    directives: [MASONRY_DIRECTIVES],
    template: `
        <h1>{{title}}</h1>
        
        <div>
            <button (click)="addItem()">Add item</button>
            <button (click)="removeRandomItem()">Remove random item</button>
            <button (click)="clearItems()">Clear items</button>
        </div>
        
        <masonry [options]="{transitionDuration: '0.8s'}">
            <masonry-brick class="brick" *ngFor="#brick of bricks">
                <img *ngIf="brick.image" src="{{brick.image}}" />
                <p *ngIf="brick.text">{{brick.text}}</p>
            </masonry-brick>
        </masonry>
        `
})
export class AppComponent {

    title: string = 'Angular2 masonry';

    bricks: string[] = [];

    constructor() {

    }

    addItem() {
        var index = Math.floor(Math.random() * (lorem.length - 1));

        this.bricks.push(lorem[index]);
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


// Demo content
var lorem = [
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec venenatis eros. Maecenas sollicitudin pharetra orci quis mattis. Morbi non.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pharetra blandit ultricies. Quisque at dapibus elit. Nullam pharetra lorem et.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum tortor, pellentesque quis feugiat et, lacinia sit amet lorem. Morbi pulvinar diam fermentum urna elementum, eu mollis urna rutrum. Donec vel neque malesuada, porta erat et, laoreet turpis. Curabitur vel porta elit, sed molestie elit. Phasellus scelerisque scelerisque lectus, sed.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo neque tempor, aliquam odio a, sollicitudin lacus. Morbi ut justo nisi. Quisque convallis, nisl ac gravida semper, nisi turpis maximus felis, non gravida ex mi eu metus. Vestibulum semper venenatis viverra. Nulla volutpat lacinia scelerisque. Nunc efficitur dolor non imperdiet.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet odio aliquam, egestas urna non, vehicula dui. In at rhoncus erat. Maecenas convallis porta enim et varius. Nulla ut.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium.' },
    { text: 'Lorem ipsum dolor sit amet.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum metus id faucibus placerat. Sed at fermentum dolor, id ultricies.' },
    { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et erat tempus, varius dolor at, congue erat. Donec scelerisque ullamcorper.' },
    { image: 'http://lorempixel.com/250/200/abstract' },
    { image: 'http://lorempixel.com/250/300/abstract' },
    { image: 'http://lorempixel.com/250/300/abstract' },
    { image: 'http://lorempixel.com/250/400/abstract' },
    { image: 'http://lorempixel.com/250/400/abstract' },
    { image: 'http://lorempixel.com/250/500/abstract' },
    { image: 'http://lorempixel.com/250/500/abstract' }
]