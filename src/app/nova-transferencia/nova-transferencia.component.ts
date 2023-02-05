import { TransferenciaService } from './../services/transferencias.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log('solicitada nova transferencia');
    const valorEmititr: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(valorEmititr).subscribe((resultado) => {
      console.log(resultado);
      this.limparcampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.log(error)
    );
    //
  }

  limparcampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
