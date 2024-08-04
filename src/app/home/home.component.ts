import { Component, signal } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "./about/about.component";
import { ResumeComponent } from "./resume/resume.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { BlogComponent } from "./blog/blog.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, ResumeComponent, PortfolioComponent, BlogComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  //item = signal<string>('About Me');
  item = signal<string>('Resume');

  itemSelected(item: string): void {
    if (item === 'About') {
      item = 'About Me';
    }
    this.item.set(item);
  }
}
