import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h3>{{en}}</h3>
            <p>{{vn}}</p>
        </div>
    `
})

export class WordComponent {
    @Input() en: string;
    @Input() vn: string;
}
