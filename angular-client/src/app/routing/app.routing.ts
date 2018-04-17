import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { FavoritosListComponent } from '../components/favoritos-list.component/favoritos-list.component';
import { DetailComponent } from '../components/detail.component/detail.component';
import { AddFavoritoComponent } from '../components/favorito-add.component/favorito-add.component';
import { EditFavoritoComponent } from '../components/favorito-edit.component/favorito-edit.component';


const appRoutes: Routes = [
    { path: '', component: FavoritosListComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'crear-marcador', component: AddFavoritoComponent },
    { path: 'editar-marcador/:id', component: EditFavoritoComponent },
    { path: '**', component: FavoritosListComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);