import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casos-exitos',
  templateUrl: './casos-exitos.component.html',
  styleUrls: ['./casos-exitos.component.css'],
  animations: [
    trigger('exitos', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CasosExitosComponent {
  @Input() imagenesExitos!: string[]

  showAnimation = false;
  currentIndex = -1;

  constructor() {
    window.addEventListener('scroll', this.checkScroll, true);
  }

  checkScroll = () => {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const triggerPoint = this.getTriggerPoint();

    if (scrollPosition >= triggerPoint) {
      this.showAnimation = true;
      this.cargarAnimacion()
      window.removeEventListener('scroll', this.checkScroll, true);
    }
  }

  getTriggerPoint() {
    const element = document.getElementById('exitos');
    if (element) {
      const elementPosition = element.offsetTop;
      return elementPosition;

    }
    return 0;
  }

  cargarAnimacion() {
    setInterval(() => {
      this.currentIndex++;
    }, 300);
  }
}
