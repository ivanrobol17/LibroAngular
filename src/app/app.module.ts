import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ModificaComponent } from './modifica/modifica.component';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    // ... altri moduli di Angular Material ...
  ],
  // ... altre dichiarazioni e configurazioni ...
})
export class TuoModulo { }


@NgModule({
  declarations: [
    AppComponent,
    InserimentoComponent,
    ListaComponent,
    ModificaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
