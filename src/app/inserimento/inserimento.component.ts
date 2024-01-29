import { Component, EventEmitter, Output } from '@angular/core';
import { Libro } from '../domain/Libro';
import { Observable } from 'rxjs';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrl: './inserimento.component.css'
})
export class InserimentoComponent {
  constructor(public jsonService : JsonService){
  }
  id : number = 0
  userId:number=0
  title: string=""
  completed: boolean=false
  // aggiungiLibro(){
  //   this.nuovoLibro = {titolo: this.titolo, tipo: this.tipo}
  //   this.inviaLibro.emit(this.nuovoLibro)
  //   this.titolo=""
  //   this.tipo=""
  // }
  json$cercato : any[]=[]
  json$inserito : any[]=[]
  cercato : boolean = false
  inserito : boolean = false
  cercaLibro(){
    this.jsonService.getLibroJson(this.id).subscribe(
      data =>{
        console.log("cercato elemento con id: "+this.id+" e i dati sono: \n",data)
        this.json$cercato.push(data)
      }
    )
  }
  inserisciLibro(){
    let lib : Libro = {userId:this.userId, id:this.id, title:this.title, completed:this.completed}
    this.jsonService.postLibroJson(lib).subscribe(
      data =>{
        console.log("creato elemento con i seguenti dati: \n",data)
        this.json$inserito.push(data)
      }
    )
  }
}
