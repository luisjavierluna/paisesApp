import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Country } from '../interfaces/pais-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,cca2,flags,population')
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

  buscarCapital(termino: string):Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<Country[]>(url, { params: this.httpParams })
  }

  getPaisPorAlpha(id: string):Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`

    return this.http.get<Country[]>(url).pipe(
        map(response => response[0])
    );
  }

  buscarRegion(region: string):Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`

    return this.http.get<Country[]>(url, { params: this.httpParams } )
      .pipe(
        tap( console.log)
      )
  }
}
