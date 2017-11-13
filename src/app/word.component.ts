import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h3>{{wordObj.en}}</h3>
            <p>{{wordObj.vn}}</p>
            <button (click)="remove();">Xoa</button>
        </div>
    `
})

export class WordComponent {
    @Input() wordObj: string;
    @Output() onRemove = new EventEmitter();

    remove() {
        this.onRemove.emit();
    }
}
