import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    MatIconModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  profile = {
    name: 'Manuel Rivadeneyra',
    role: 'Web developer',
    email: 'amanuelrivadeneyrai@gmail.com',
    phone: '+51 907960250',
    birthday: 'August 01, 2002',
    address: 'Lima, Peru',
    avatar: '',
  };
}
