import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ScrollServiceService } from './servicios/scroll-service.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private scrollService: ScrollServiceService) { }

  title = 'pracditec';

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollService.scrollToTop();
      });

    // Swal.fire({
    //   icon: 'info',
    //   title: 'Esta página web es un proyecto didáctico que no tiene nada que ver con la página web original de GEDITEC'
    // })

  }
}
