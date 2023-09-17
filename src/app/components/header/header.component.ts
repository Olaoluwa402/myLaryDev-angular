import { Component } from '@angular/core';
import { faTimes, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faTimes = faTimes;
  faSatelliteDish = faSatelliteDish;
}
