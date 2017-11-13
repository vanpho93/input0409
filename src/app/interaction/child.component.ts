import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div>
            <h3>Child Component</h3>
            <button (click)="onIncrease()">Increase</button>
            <button (click)="onDescrease()">Descrease</button>
        </div>
    `
})

export class ChildComponent {
    @Output() myClick = new EventEmitter();

    onIncrease() {
        this.myClick.emit(true);
    }

    onDescrease() {
        this.myClick.emit(false);
    }
}
