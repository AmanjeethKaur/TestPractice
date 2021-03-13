import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class UserMemInDataService implements InMemoryDbService {
  createDb() {
    let users: any[] = [
      { id: 1, name: 'Amanjeeth Kaur'},
      { id: 2, name: 'Priya'},
      { id: 3, name: 'Sameer'},
      { id: 4, name: 'Ranbir'},
      { id: 5, name: 'Sachin'}
    ];  
    return {users};
  }
}




 
