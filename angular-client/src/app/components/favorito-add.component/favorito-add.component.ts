import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FavoritoService } from '../../services/favorito.service';
import { Favorito } from '../../models/favorito';

@Component({
    selector: 'favorito-add',
    templateUrl: './favorito-add.component.html',
    styleUrls: ['./favorito-add.component.css'],
    providers: [FavoritoService]
})
export class AddFavoritoComponent implements OnInit {
    public titleSection: String;
    public favorito: Favorito;
    public errorMessage: any;
    constructor(
        private _favoritoService: FavoritoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titleSection = "Crear un marcador favorito";
    }

    ngOnInit() {
        this.favorito = new Favorito("", "", "", "");
    }

    onSubmit() {
        this._favoritoService.addFavorito(this.favorito).subscribe(
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
    }
}
