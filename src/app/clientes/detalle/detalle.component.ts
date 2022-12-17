import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';       //SE PONE .. PARA RETROCEDER EN UNA CARPETA Y ASÍ ACCEDER A LAS CLASES.
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'detalle-cliente',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
