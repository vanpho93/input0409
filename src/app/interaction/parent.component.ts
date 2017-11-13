import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
        <div>
            <h3>Value: {{value}}</h3>
            <button>Increase</button>
            <app-child></app-child>
        </div>
    `
})

export class ParentComponent {
    value = 1;
}
