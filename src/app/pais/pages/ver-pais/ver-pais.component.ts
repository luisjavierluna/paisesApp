import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais-interface';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    
    this.paisService.getPaisPorAlpha( 'SV' )
    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )  ),
      tap( console.log )
    )
    .subscribe({ next: pais => this.pais = pais });
  }

}
