import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Observable, of} from 'rxjs';
import {RequestInfo} from "angular-in-memory-web-api/interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }

  createDb(reqInfo: RequestInfo): {} | Observable<{}> | Promise<{}>{
    return { heroes: [
      { id: 1, name: 'Boothstomper', team: 'Nice'},
      { id: 2, name: 'Drogfisher', team: 'Voice'},
      { id: 3, name: 'Bloodyllips', team: 'Ride'},
      { id: 4, name: 'Mr Bu Moverse',  team: 'Bike'},
      { id: 5, name: 'Piranhaelli',  team: 'New'}
    ]
    };
  }

  // createDb(reqInfo?: string | RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
  //   return {
  //     heroes: []
  //   };
  // }
}
