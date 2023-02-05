import { TransferenciaService } from './services/transferencias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor (private service: TransferenciaService){

  }

  transferir($event) {
    console.log($event);
    this.service.adicionar($event)
  }
}
