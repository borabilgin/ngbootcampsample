import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../list/list.service';
import { List } from '../list';
import { Task } from '../task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private listService: ListService) { }
  lists: List[];
  tasks: Task[];

  ngOnInit() {
    this.listService.getLists().subscribe(lists => {
      this.lists = lists;
      console.log(this.lists);
    });

    this.listService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

}
