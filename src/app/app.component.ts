import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  words = [
    { en: 'One', vn: 'Mot', isMemorized: true },
    { en: 'Two', vn: 'Hai', isMemorized: false },
    { en: 'Three', vn: 'Ba', isMemorized: true }
  ];

  onRemove(en) {
    const index = this.words.findIndex(e => e.en === en);
    this.words.splice(index, 1);
  }

  onAdd(word) {
    this.words.push(word);
  }

  onToggle(en) {
    const word = this.words.find(e => e.en === en);
    word.isMemorized = !word.isMemorized;
  }
}
