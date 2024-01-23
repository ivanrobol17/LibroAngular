import { Component, EventEmitter, Output } from '@angular/core';
import { Libro } from '../domain/Libro';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrl: './inserimento.component.css'
})
export class InserimentoComponent {
  titolo : string =""
  tipo : string =""
  @Output() inviaLibro = new EventEmitter<Libro>()
  nuovoLibro : Libro | undefined
  aggiungiLibro(){
    this.nuovoLibro = {titolo: this.titolo, tipo: this.tipo}
    this.inviaLibro.emit(this.nuovoLibro)
    this.titolo=""
    this.tipo=""
  }
}
