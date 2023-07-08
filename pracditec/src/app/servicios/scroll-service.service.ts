import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollServiceService {

  constructor() { }

  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0
    })
  }

  scrollToTopButton(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
