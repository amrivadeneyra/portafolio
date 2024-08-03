import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { Items } from './data/items';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() onItemSelected: EventEmitter<string> = new EventEmitter<string>();

  selectedItem = signal<string>('');

  items = Items

  selectItem(item: string): void {
    this.selectedItem.set(item);
    this.onItemSelected.emit(item);
  }

  isSelected(item: string): boolean {
    return this.selectedItem() === item;
  }

}
