import { Component } from '@angular/core';
import { paragraph } from './data/Paragraph';
import { Paragraph } from './models/paragraph';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  paragraphs: Paragraph[] = paragraph
}
