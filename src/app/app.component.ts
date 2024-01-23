import { Component } from '@angular/core';
import { Libro } from './domain/Libro';
import { DatiService } from './services/dati.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //listaLibri : Libro[]=[]
  //datiService : DatiService = new DatiService()
  aggiungi : boolean = false
  constructor(public datiService : DatiService){

  }
  aggiungiLibro(nuovoLibro:Libro){
    this.datiService.addLibro(nuovoLibro)
    this.aggiungi=!this.aggiungi
  }
  cambiaSchermata(){
    this.aggiungi=!this.aggiungi
  }
  eliminaLibro(idLibro: number){
    this.datiService.removeLibro(idLibro)
  }
}