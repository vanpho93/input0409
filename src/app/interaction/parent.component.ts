import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Value: {{value}}</h3>
            <button (click)="change(true)">Increase</button>
            <app-child (myClick)="change($event)"></app-child>
        </div>
    `
})

export class ParentComponent {
    value = 1;
    // increase() {
    //     this.value++;
    // }
    change(isIncrease) {
        isIncrease ? this.value++ : this.value--;
    }
}
