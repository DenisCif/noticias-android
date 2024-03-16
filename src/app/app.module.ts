import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './component/auth/login/login.component';
import { InicioComponent } from './component/inicio/inicio/inicio.component';
import { RegisterComponent } from './component/auth/register/register.component';
import { DetalleNoticiaComponent } from './component/noticias/detalle-noticia/detalle-noticia.component';
import { CategoriasComponent } from './component/noticias/categorias/categorias.component';
import { NoticiasRelacionadasComponent } from './component/noticias/noticias-relacionadas/noticias-relacionadas.component';
import { InicioNoticiasComponent } from './component/noticias/inicio-noticias/inicio-noticias.component';



@NgModule({
  declarations: [AppComponent, LoginComponent, InicioComponent, RegisterComponent, DetalleNoticiaComponent, NoticiasRelacionadasComponent,
    CategoriasComponent, InicioNoticiasComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
