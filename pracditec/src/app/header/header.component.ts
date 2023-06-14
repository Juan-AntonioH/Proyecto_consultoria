import { Component } from '@angular/core';
import { faPhone, faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faPhone = faPhone;
  email = faEnvelope;
  mapMarker = faMapMarkerAlt;
  facebook = faFacebookF;
  linkedin = faLinkedinIn;
}
