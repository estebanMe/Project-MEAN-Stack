import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';


@Component({
    selector: 'favoritos-list',
    templateUrl: './favoritos-list.component.html',
    styleUrls: ['./favoritos-list.component.css'],
    providers: [FavoritoService]
})
export class FavoritosListComponent implements OnInit {
    public title: string;
    public loading: boolean;
    public favoritos: Favorito[];
    public errorMessage: any;
    public confirmado;
    constructor(
        private _favoritoService: FavoritoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.title = 'Listado de marcadores:';
        this.loading = true;
    }

    ngOnInit() {
        this.getFavoritos();
    }

    getFavoritos() {
        this._favoritoService.getFavoritos().subscribe(
            result => {
                this.favoritos = result.favoritos;
                this.loading = false;
            },
            error => {
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
        );
    }

    onBorrarConfirm(id) {
        this.confirmado = id;
    }

    onCancelarConfirm() {
        this.confirmado = null;
    }

    onBorrarFavorito(id) {
        this._favoritoService.deleteFavorito(id).subscribe(
            result => {

                if (!result.message) {
                    alert('Error en la petición');
                } else {
                    this.getFavoritos();
                }

            },
            error => {
                if (this.errorMessage != null) {
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }
    }
}
