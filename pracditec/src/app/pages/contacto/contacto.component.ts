import { Component, Renderer2 } from '@angular/core';
import { Contacto } from 'src/app/modelos/contacto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpContactoService } from 'src/app/servicios/http-contacto.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

// declare const CKEditor: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  //   public onChange( { editor }: ChangeEvent ) {
  //     this.mensajeContacto = editor.data.get();

  //     console.log( this.mensajeContacto );
  // }

  mensaje: string = ''
  // editorConfiguration!: Object
  formularioContacto!: FormGroup
  resultado!: string
  estadoFormulario: boolean = true
  respuestaEnvio: boolean = true
  statusResponse!: boolean
  Editor = ClassicEditor;
  constructor(private renderer: Renderer2, private formBuilder: FormBuilder, private httpContacto: HttpContactoService) {
    this.createForm()
  }

  createForm() {
    this.formularioContacto = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      email: ['', [Validators.required, Validators.email,
      Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      movil: ['', [Validators.required, Validators.minLength(7),
      Validators.maxLength(12),
      Validators.pattern(/^([0-9])*$/)]],
      empresa: ['', Validators.required],
      mensaje: ['', [Validators.required, Validators.minLength(5)]],
      // file: ['', Validators.required],
      check: [false, Validators.requiredTrue]
    })
  }
  getCampoClases(campo: string): string {
    const control = this.formularioContacto.get(campo);
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

    if (this.formularioContacto.valid) {
      this.estadoFormulario = true
      this.httpContacto.postFormularioContactos(this.formularioContacto.value).subscribe(
        {
          next: datos => { this.resultado = datos, this.formularioContacto.reset(), this.respuestaEnvio = false, this.statusResponse=true },
          error: error => { this.resultado = error.error, this.respuestaEnvio = false, this.statusResponse=false }
        }
      )
    }
  }

  tituloInicial = {
    "tipo": "¿TIENES UN PROYECTO?",
    "titulo": "Contáctanos",
    "imagen": "fondo-obra-civil"
  }

  contactos: Contacto[] = [
    {
      ruta: "mailto:pruebas@pruebas.com",
      background: "#16558F",
      titulo: "Correo electrónico",
      mensaje: "Haz clic para escribirnos un correo a pruebas@pruebas.com",
      tipo: "Enviar correo"
    },
    {
      ruta: "tel:+34123456789",
      background: "#A2C4E0",
      titulo: "Llámanos",
      mensaje: "Teléfono Oficinas Centrales<br>+34 123 456 789",
      tipo: "Llamar"
    },
    {
      ruta: "https://goo.gl/maps/1krrbMe9fE8DiFSK6",
      background: "#CAAF82",
      titulo: "Visítanos",
      mensaje: "Calle Perdida, nº 99, Bajo. 46920, Valencia, España",
      tipo: "Google Maps"
    },
  ]

  // loadScript() {
  //   const script = this.renderer.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = 'assets/js/ckeditor.js';
  //   this.renderer.appendChild(document.body, script);
  // }

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.loadScript();
  //   }, 0);
  // }
}
