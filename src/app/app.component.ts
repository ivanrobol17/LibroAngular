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
    this.aggiungi=!this.aggiungi
  }
  cambiaSchermata(){
    this.aggiungi=!this.aggiungi
  }
  eliminaLibro(idLibro: number){
    this.listaLibri.splice(idLibro, 1)
  }
}