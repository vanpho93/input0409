import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
    <input placeholder="English" [(ngModel)]="txtEn">
    <br>
    <input placeholder="Vietnamese" [(ngModel)]="txtVn">
    <br>
    <button (click)="add()">Add</button>
    <button (click)="hideForm()">Cancel</button>
    `
})

export class WordFormComponent {
    @Output() onAdd = new EventEmitter();
    @Output() onToggleIsShowForm = new EventEmitter();
    txtEn = '';
    txtVn = '';
    add() {
        this.onAdd.emit({ en: this.txtEn, vn: this.txtVn });
        this.hideForm();
    }

    hideForm() {
        this.onToggleIsShowForm.emit();
    }
}
