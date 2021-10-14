import { ModalModule } from 'ngx-bootstrap/modal';
import { ProdutosService } from './produtos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './components/produtos/produtos.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [HttpClientModule, ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
