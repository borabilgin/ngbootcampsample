import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { List } from '../list';
import { Task } from '../task';

import { LISTS } from './mock-lists';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {
  lists: List[] = [];
  private url = 'http://localhost:3000/api';
  // private url = 'https://b5b809fa-7d23-4fcb-841f-bf38da4d458c.mock.pstmn.io';

  constructor(
    private http: HttpClient
  ) { }

  // getList(listId): List {
  //   return LISTS.filter(list => list.id === listId)[0];
  // }

  toggleTask(task) {
    this.http.post(`${this.url}/toggle`, {taskId: task.id}).subscribe();
  }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.url}/lists`);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}/tasks`);
  }

  addList(list: List) {
    this.lists.push(list);
  }

}
