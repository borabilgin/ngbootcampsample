import { Component, OnInit, Input } from '@angular/core';
import { ListService } from './list.service';
import { List } from './list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() listId: number;

  list: List;

  constructor(private listService: ListService) { }

  ngOnInit() {
    console.log(this.getList(this.listId));
  }

  getList(listId): void {
    this.list = this.listService.getList(this.listId);
    console.log(this.list);
  }

  // getLists(): void {
  //   this.listService.getLists()
  //     .subscribe(lists => this.list = lists);
  // }

}
