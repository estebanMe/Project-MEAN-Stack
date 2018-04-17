import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRoutingProviders, routing } from './routing/app.routing';
//Componets
import { AppComponent } from './components/home.component/home.component';
import { FavoritosListComponent } from './components/favoritos-list.component/favoritos-list.component';
import { DetailComponent } from './components/detail.component/detail.component';
import { AddFavoritoComponent } from './components/favorito-add.component/favorito-add.component';
import { EditFavoritoComponent } from './components/favorito-edit.component/favorito-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritosListComponent,
    DetailComponent,
    AddFavoritoComponent,
    EditFavoritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
