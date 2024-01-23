import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../../domain/Libro';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  @Input() listaLibri : Libro[] = []
  @Output() idLibro  = new EventEmitter<number>()
  eliminaLibro(i: number){
    this.idLibro.emit(i)
  }
}
 