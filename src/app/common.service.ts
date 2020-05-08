import { Injectable } from '@angular/core';
// import {Search} from './search';
import { BehaviorSubject} from 'rxjs';
import { Search } from './search';
// import { SecurityDTO } from './security-dto';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // private messageSource = new BehaviorSubject(new Search());
  // currentMessage = this.messageSource.asObservable();

  // private securitySource = new BehaviorSubject(new SecurityDTO({}));
  // currentSecurity = this.securitySource.asObservable();

  private colorSource = new BehaviorSubject('');
  currentColor = this.colorSource.asObservable();

  public search : Search;

  constructor() {}

  // changeMessage(search: Search) {
  //   this.messageSource.next(search);
  // }

  // changeSecurity(securityDTO: SecurityDTO) {
  //   this.securitySource.next(securityDTO);
  // }

  changeColor(color: string) {
    this.colorSource.next(color);
  }
}
