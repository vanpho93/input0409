import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Value: {{value}}</h3>
            <button (click)="increase()">Increase</button>
            <app-child (myClick)="increase()"></app-child>
        </div>
    `
})

export class ParentComponent {
    value = 1;
    increase() {
        this.value++;
    }
}
