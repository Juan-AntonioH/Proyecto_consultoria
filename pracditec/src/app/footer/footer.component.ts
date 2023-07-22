import { Component } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ScrollServiceService } from '../servicios/scroll-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HttpNewsletterService } from '../servicios/http-newsletter.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  formularioNewsletter!: FormGroup

  constructor(private scrollService: ScrollServiceService, private formBuilder: FormBuilder, private httpNewsletter: HttpNewsletterService) {
    this.formularioNewsletter = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,
      Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]]
    })
  }

  flechaArriba = faArrowUp;

  submit() {

    if (this.formularioNewsletter.valid) {
      this.httpNewsletter.postFormularioNewsletter(this.formularioNewsletter.value).subscribe(
        {
          next: datos => { this.toast(true, datos), this.formularioNewsletter.reset() },
          error: error => { this.toast(false, error.error) }
        }
      )
    } else {
      this.toast(false, "Correo electrónico no valido")
    }
  }

  scrollToTop(): void {
    this.scrollService.scrollToTopButton();
  }

  toast(icono: boolean, mensaje: string): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    if (icono) {
      Toast.fire({
        icon: 'success',
        title: mensaje
      })
    } else {
      Toast.fire({
        icon: 'error',
        title: mensaje
      })
    }
  }
}
