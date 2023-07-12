import { Component, Renderer2 } from '@angular/core';
import { Contacto } from 'src/app/modelos/contacto';
import { FormBuilder, FormGroup, Validators, FormArrayName, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  mensajeContacto!:any
  editorConfiguration!:Object
  formularioContacto!: FormGroup;
  resultado!: string;
  oculto: boolean = true
  constructor(private renderer: Renderer2, private formBuilder: FormBuilder) {
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
      // mensajeContacto: ['', [Validators.required, Validators.minLength(5)]],
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
    this.oculto = false
    if (this.formularioContacto.valid) {
      this.resultado = "Todos los datos son válidos"
      this.formularioContacto.reset()
      this.oculto = true
    } else {
      this.resultado = "Hay datos inválidos en el formulario"
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

  loadScript() {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = 'assets/js/ckeditor.js';
    this.renderer.appendChild(document.body, script);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadScript();
    }, 0);
  }
}
