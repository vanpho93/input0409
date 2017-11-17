import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h3 [style.color]="wordObj.isMemorized ? 'green' : 'red'">
                {{wordObj.en}}
            </h3>
            <p>{{wordObj.vn}}</p>
            <button (click)="remove();">Xoa</button>
            <button (click)="toggle();">Toggle</button>
        </div>
    `
})

export class WordComponent {
    @Input() wordObj: string;
    @Output() onRemove = new EventEmitter();
    @Output() onToggle = new EventEmitter();
    remove() {
        this.onRemove.emit();
    }

    toggle() {
        this.onToggle.emit();
    }
}
