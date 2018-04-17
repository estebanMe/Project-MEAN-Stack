import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';

@Component({
    selector: 'favorito-edit',
    templateUrl: './favorito-edit.component.html',
    styleUrls: ['./favorito-edit.component.css'],
    providers: [FavoritoService]
})
export class EditFavoritoComponent implements OnInit {
    public titleSection: String;
    public favorito: Favorito;
    public errorMessage: any;
    constructor(
        private _favoritoService: FavoritoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titleSection = "Editar un favorito";
    }
    ngOnInit() {
        this.getFavorito();
        this.favorito = new Favorito("", "", "", "");
    }

    getFavorito() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._favoritoService.getFavorito(id).subscribe(
                response => {
                    this.favorito = response.favorito;
                    if (!this.favorito) {
                        this._router.navigate(['/']);
                    }
                },
                error => {
                    if (this.errorMessage != null) {
                        console.log(this.errorMessage);
                        alert('Error en la petición');
                    }
                }
            );
        });
    }

    onSubmit() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._favoritoService.editFavorito(id, this.favorito).subscribe(
                response => {

                    if (!this.favorito) {
                        alert('Error en el servidor');
                    } else {
                        this.favorito = response.favorito;
                        this._router.navigate(['/detail', this.favorito._id]);
                    }
                },
                error => {
                    if (this.errorMessage != null) {
                        console.log(this.errorMessage);
                        alert('Error en la petición');
                    }
                }

            )
        })
    }
}