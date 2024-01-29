import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  json$ : Observable<Libro[]>
  @Output() modifica = new EventEmitter<number>()
  constructor(public jsonService : JsonService){
    this.json$=jsonService.getJson()
  }
  eliminaLibro(i: number){
    this.jsonService.deleteLibroJson(i).subscribe(
      data =>{
        console.log("cancellato: ",data)
        alert("eliminato l'elemento "+i)
      }
    )
  }
  modificaLibro(id:number){
    this.modifica.emit(id)
  }
}
 