import { Component } from '@angular/core';
import { Libro } from './domain/Libro';
import { DatiService } from './services/dati.service';
import { JsonService } from './services/json.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //listaLibri : Libro[]=[]
  //datiService : DatiService = new DatiService()
  aggiungi : boolean = false
  json$ : Observable<Libro[]>
  constructor(public datiService : DatiService, public jsonService : JsonService){
    this.json$=jsonService.getJson()
  }
  // aggiungiLibro(nuovoLibro:Libro){
  //   this.datiService.addLibro(nuovoLibro)
  //   this.aggiungi=!this.aggiungi
  // }
  cambiaSchermata(){
    this.aggiungi=!this.aggiungi
  }
  // eliminaLibro(idLibro: number){
  //   this.datiService.removeLibro(idLibro)
  // }
}