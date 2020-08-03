import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProduitImmobilierDTO} from '../models/produit-immobilier-dto';
import {map} from 'rxjs/operators';
import {Search} from '../models/Search';
import {Injectable} from '@angular/core';
import {DossierSimulationDTO} from "../models/dossier-simulation-dto";

@Injectable({
  providedIn: 'root'
})
export class ProduitImmobilierDetailsService {

 // public PRODUIT_API = 'ec2-15-236-43-62.eu-west-3.compute.amazonaws.com:5555/api/audit/dossier';
  public PRODUIT_API = 'http://localhost:5555/api/audit/dossier';
  constructor(private http: HttpClient) {
  }

  getDetailsProduit(id: number): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    headers.append('Access-Control-Allow-Origin: *', 'utf-8');
    const options = {headers};/*192.168.99.100*/
   // return this.http.get(`${this.PRODUIT_API}/${id}`,options);
    return this.http.get(`${this.PRODUIT_API}/${id}`,options)
      .pipe(map((result: DossierSimulationDTO) => result as DossierSimulationDTO));
  }
}
