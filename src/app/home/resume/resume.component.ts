import { Component } from '@angular/core';
import { resume } from './data/Resume';
import { skills } from './data/Skill';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  resume = resume

  skills = skills

}
