import { transition, trigger, style, animate } from '@angular/animations';
export const ifAnimation = trigger('ifAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: '*' })),
  ]),
  transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
]);
