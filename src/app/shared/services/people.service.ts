import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any> {
    let peopleArray = [
      {
        firstName: 'José',
        lastName: 'Silva',
        age: 26
      },
      {
        firstName: 'Carlos',
        lastName: 'Adão',
        age: 37
      },
      {
        firstName: 'Julia',
        lastName: 'Fonseca',
        age: 24
      }, 
      {
        firstName: 'Beatriz',
        lastName: 'Sousa',
        age: 27
      }, 
    ]

    return of (peopleArray)
  }
}
