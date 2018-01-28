import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists(): void {
    this.listService.getLists()
      .subscribe(lists => this.lists = lists);
  }

}
