import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ScrollServiceService } from '../servicios/scroll-service.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private scrollService: ScrollServiceService) { }

  flechaArriba = faArrowUp;

  scrollToTop(): void {
    this.scrollService.scrollToTopButton();
  }
}
