import { Component } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
    <input placeholder="English" [(ngModel)]="txtEn">
    <br>
    <input placeholder="Vietnamese" [(ngModel)]="txtVn">
    <br>
    <button>Add</button>
    `
})

export class WordFormComponent {
    txtEn = '';
    txtVn = '';
}
