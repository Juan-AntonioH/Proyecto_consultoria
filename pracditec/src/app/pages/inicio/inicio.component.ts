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
  constructor(private acordeonService: InicioService) {}

  users = faUsers;
  acordeones!: Acordeon[]
  maxHeights: number[] = []
  industrial:string[]=[
    "logo-acciona",
    "logo-acento-laboratorios",
    "logo-alvinox",
    "logo-arcelor-mittal",
    "logo-bet-solar",
    "logo-cadel-deinking",
    "logo-clariana",
    "logo-crem",
    "logo-bronchales",
    "logo-crown",
    "logo_ebir",
    "logo_faerch_plast",
    "logo_fede_farma",
    "logo_imex",
    "logo_importaco",
    "logo_inurban",
    "logo_istobal",
    "logo_jaeger",
    "logo_jasa",
    "logo_krannich",
    "logo_kuora",
    "logo_marqueset",
    "logo_mercavalencia",
    "logo_miquel_y_costas",
    "logo_moldtrans",
    "logo_natra",
    "logo_nederval",
    "logo_solera",
    "logo_sp_berner",
    "logo_tiba",
    "logo-miarco",
    "logo-lacteos-roma"
  ]

  servicios:string[]=[
    "logo_yelmo_cines",
    "logo-aguas-calpe",
    "logo-caixa-popular",
    "logo-civi-red",
    "logo-colonial",
    "logo_decathlon",
    "logo_economy",
    "logo_emivasa",
    "logo_global_omnium",
    "logo_mercadona",
    "logo_monto",
    "logo_myo",
    "logo_orenes",
    "logo_sanitas",
    "logo_sermesa",
    "logo_tuco",
    "logo_wayco"
  ]

  edificacion:string[]=[
    "logo-acciona",
    "logo-active",
    "logo-aldaia",
    "logo-amislata-yuntamiento",
    "logo-ayuntamiento-paiporta",
    "logo-betera",
    "logo-bilbao-port",
    "logo-colegio-santa-cruz",
    "logo_generalitat_valenciana",
    "logo_global_omnium",
    "logo_go_hub",
    "logo_llucanes",
    "logo_municipalidad_horta_sud",
    "logo_orenes_casino",
    "logo_sindicatura_valenciana",
    "logo_tempo",
    "logo_vadis",
    "logo_vila"
  ]

  hidraulica:string[]=[
    "logo-amislata-yuntamiento",
    "logo-comunidad-regantes-ondara",
    "logo-comunindad-regants-pedreguer",
    "logo_generalitat_valenciana",
    "logo-amislata-yuntamiento",
    "logo-comunidad-regantes-ondara",
    "logo-comunindad-regants-pedreguer",
    "logo_generalitat_valenciana"
  ]

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

  ngOnInit() {
    this.acordeones = this.acordeonService.getAcordeones()
    this.maxHeights = Array(this.acordeones.length).fill(0);
  }

}
