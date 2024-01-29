import { Component } from '@angular/core';
import { JsonService } from '../services/json.service';
import { Libro } from '../domain/Libro';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrl: './modifica.component.css'
})
export class ModificaComponent {
  constructor(public jsonService : JsonService){
  }
  id : number = 0
  userId:number=0
  title: string=""
  completed: boolean=false
  modifica:boolean=false
  caricaLibro(id:number){
    this.jsonService.getLibroJson(id).subscribe(
      (data: any) =>{
        console.log("caricato elemento con id: "+data.id)
        this.id = data.id
        this.userId=data.userId
        this.title=data.title
        this.completed=data.completed
        this.modifica=true
      }
    )
  }
  ris : any
  modificaLibro(){
    let libro : Libro = {id: this.id, userId:this.userId, title: this.title, completed: this.completed}
    this.jsonService.putLibroJson(libro, this.id).subscribe(
      data=>{
        console.log("modificato il libro: "+data.id)
        alert("modifica avvenuta con successo, id del libro: "+data.id)
        this.ris=data
        this.modifica=false
      }
    )
  }
}
