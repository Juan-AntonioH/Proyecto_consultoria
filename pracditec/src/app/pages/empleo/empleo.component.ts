import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/modelos/contacto';
import { HttpEmpleoService } from 'src/app/servicios/http-empleo.service';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent {
  formularioEmpleo!: FormGroup;
  resultado!: string
  estadoFormulario: boolean = true
  respuestaEnvio: boolean = true
  statusResponse!: boolean
  constructor(private formBuilder: FormBuilder, private httpEmpleo: HttpEmpleoService) {
    this.createForm()
  }

  createForm() {
    this.formularioEmpleo = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: ['', [Validators.required, Validators.email,
      Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      movil: ['', [Validators.required, Validators.minLength(7),
      Validators.maxLength(12),
      Validators.pattern(/^([0-9])*$/)]],
      file: ['', Validators.required],
      check: [false, Validators.requiredTrue]
    })
  }

  getCampoClases(campo: string): string {
    const control = this.formularioEmpleo.get(campo);
    if (control?.invalid && control?.touched) {
      return 'input-invalid';
    } else if (control?.valid) {
      return 'input-valid';
    }
    return '';
  }
  submit() {
    this.estadoFormulario = false
    this.respuestaEnvio = true

      const formData = new FormData();
      formData.append('nombre', this.formularioEmpleo.get('nombre')?.value);
      formData.append('email', this.formularioEmpleo.get('email')?.value);
      formData.append('movil', this.formularioEmpleo.get('movil')?.value);
      const archivoInput = document.getElementById('file') as HTMLInputElement;
      if (archivoInput.files && archivoInput.files.length > 0) {
        const archivo = archivoInput.files[0];
        formData.append('file', archivo, archivo.name);
      }

        if (this.formularioEmpleo.valid) {
      this.estadoFormulario = true
      this.httpEmpleo.postFormularioEmpleo(formData).subscribe(
        {
          next: datos => {
            this.resultado = "Formulario enviado correctamente", this.formularioEmpleo.reset(), this.respuestaEnvio = false, this.statusResponse=true,
            console.log(datos)
           },
          error: error => { this.resultado = error.error, this.respuestaEnvio = false, this.statusResponse=false }
        }
      )
    }
  }
      // if (archivo instanceof File) {
      //   formData.append('file', archivo, archivo.name);
      // }

      // console.log(this.formularioEmpleo.value)
      // console.log("separador")
      // console.log(formData)

    // } else {
    //   this.resultado = "Hay datos inválidos en el formulario"
    // }

  tituloInicial = {
    "tipo": "BUSCAMOS TALENTO",
    "titulo": "Empleo en GEDITEC Ingeniería",
    "imagen": "fondo-obra-civil"
  }

  contacto: Contacto =
    {
      ruta: "mailto:pruebas@pruebas.com",
      background: "#16558F",
      titulo: "Correo electrónico",
      mensaje: "Haz clic para escribirnos un correo a pruebas@pruebas.com",
      tipo: "Enviar correo"
    }

}
