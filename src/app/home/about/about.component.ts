import { Component } from '@angular/core';
import { paragraph } from './data/Paragraph';
import { Paragraph } from './models/paragraph';
import { MatIconModule } from '@angular/material/icon';
import { Hobbies } from './models/Hobbies';
import { hobbies } from './data/Hobbies';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  paragraphs: Paragraph[] = paragraph;
  hobbies: Hobbies[] = hobbies;
}
