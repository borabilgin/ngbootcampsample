import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { List } from './list';
import { LISTS } from './mock-lists';

@Injectable()
export class ListService {
  lists: List[] = [];

  constructor() { }

  getLists(): Observable<List[]> {
    return of(LISTS);
  }

  addList(list: List) {
    this.lists.push(list);
  }

}
