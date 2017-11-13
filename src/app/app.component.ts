import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  words = [
    { en: 'One', vn: 'Mot' },
    { en: 'Two', vn: 'Hai' },
    { en: 'Three', vn: 'Ba' }
  ];
}
