import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { appRoutingProviders, routing } from './routing/app.routing';
//Componets
import { AppComponent } from './components/home.component/home.component';
import { FavoritosListComponent } from './components/favoritos-list.component/favoritos-list.component';
import { DetailComponent } from './components/detail.component/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoritosListComponent,
    DetailComponent
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
