import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { Acordeon } from 'src/app/modelos/acordeon';
import { InicioService } from 'src/app/servicios/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private acordeonService: InicioService) {
    // Inicializa la propiedad miDiv1
    // this.miDiv1 = new ElementRef(null);
  }

  // @ViewChildren('acordeon') acordeones: QueryList<ElementRef>;

  users = faUsers;
  acordeones!: Acordeon[]
  maxHeights: number[] = []


  accordion_soluciones(id: number) {
    let acordeon: any = this.acordeones.find(a => a.id == id + 1)
    if (acordeon.estado == "activo") {
      this.maxHeights[id] = 0
      setTimeout(() => {
        acordeon.estado = "noActivo"
      }, 300);
    } else {
      acordeon.estado = "activo"
      setTimeout(() => {
        this.maxHeights[id] = document.getElementById("accordion_panel" + id)!.scrollHeight
      }, 1);

    }
  }

  // acordeon.estado = acordeon.estado == "activo" ? "noActivo" : "activo";
  // this.maxHeights[id] = acordeon.estado == "activo" ? 0 :
  ngAfterViewInit() {
    // this.maxHeights = this.acordeones.map(acordeon => acordeon.nativeElement.querySelector('.c-accordion__panel').offsetHeight + 'px');
  }
  // ngAfterViewInit() {
  //   // Obtenemos la altura del div
  //   const height = this.miDiv1.nativeElement.offsetHeight;

  //   // Calculamos el max-height
  //   this.maxHeight = height; // Se asigna el valor al componente para ser usado en el HTML
  // }

  ngOnInit() {
    this.acordeones = this.acordeonService.getAcordeones()
    this.maxHeights = Array(this.acordeones.length).fill(0);
    console.log(this.maxHeights)
  }
}
