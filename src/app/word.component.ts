import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-word',
    template: `
        <div>
            <h3>{{wordObj.en}}</h3>
            <p>{{wordObj.vn}}</p>
        </div>
    `
})

export class WordComponent {
    @Input() wordObj: string;
}
