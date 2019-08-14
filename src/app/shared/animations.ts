import {trigger, transition, animate, state, style} from '@angular/animations';

export let flyInLeft = trigger('flyInLeft', [
    transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
    ])
]);

export let fade = trigger('fadeIn', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(1000)
    ])
]);

export let flyInRight = trigger('flyInRight', [
    transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(1000)
    ])
]);
