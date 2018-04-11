import { ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { FavoritosListComponent } from '../components/favoritos-list.component/favoritos-list.component';
import { DetailComponent } from '../components/detail.component/detail.component';

const appRoutes: Routes = [
    { path: '', component: FavoritosListComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '**', component: FavoritosListComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);