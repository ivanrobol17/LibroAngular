import { Injectable } from "@angular/core";
import { Libro } from "../domain/Libro";
@Injectable({
    providedIn: 'root'
})
export class DatiService{
    elencoLibri : Libro[] = []
    getLibri():Libro[]{
        return this.elencoLibri
    }
    addLibro(newLibro:Libro){
        this.elencoLibri.push(newLibro)
    }
    removeLibro(idLibro:number){
        this.elencoLibri.splice(idLibro, 1)
    }
    getLibro(idLibro:number){
        return this.elencoLibri[idLibro]
    }
    // toString(): string{
    //     s : string = ""
    //     for (let libro of this.elencoLibri){
    //         str+="t"
    //     }
    //     return str
    // }
}