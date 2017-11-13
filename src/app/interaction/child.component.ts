import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <h3>Child Component</h3>
            <button (click)="onIncrease()">Increase</button>
        </div>
    `
})

export class ChildComponent {
    @Output() myClick = new EventEmitter();

    onIncrease() {
        this.myClick.emit();
    }
}
