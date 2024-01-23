import { Component } from '@angular/core';
import { Libro } from '../domain/Libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  listaLibri : Libro[]=[]
  aggiungi : boolean = false
  aggiungiLibro(nuovoLibro:Libro){
    this.listaLibri.push(nuovoLibro)
    if (this.aggiungi){
      this.aggiungi=false
    }else{
      this.aggiungi=true
    }
  }
  cambiaSchermata(){
    if (this.aggiungi){
      this.aggiungi=false
    }else{
      this.aggiungi=true
    }
  }
  eliminaLibro(idLibro: number){
    this.listaLibri.splice(idLibro, 1)
  }
}