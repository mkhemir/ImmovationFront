import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProduitImmobilierDTO} from '../produit-immobilier-dto';
import {map} from 'rxjs/operators';
import {Search} from '../models/Search';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListProduitImmobilierService {

  public PRODUIT_API = '192.168.99.100:5555/api/produit/produits';

  constructor(private http: HttpClient) {
  }

  getListProduitImmobilierDTO(search: Search): Observable<ProduitImmobilierDTO[]> {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    headers.append('Access-Control-Allow-Origin: *', 'utf-8');
    const options = {headers};
    return this.http.post<Search>('http://192.168.99.100:5555/api/produit/produits', new Search(), options)
      .pipe(map((recherche: Search) => recherche.result as ProduitImmobilierDTO[]));
  }

  getAll(): Observable<ProduitImmobilierDTO[]> {
    return this.http.get(this.PRODUIT_API).pipe(
      map((data: any[]) => data.map((item: any) => item as ProduitImmobilierDTO
      )),
    );
  }
}
