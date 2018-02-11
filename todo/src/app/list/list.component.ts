import { Component, OnInit, Input } from '@angular/core';
import { ListService } from './list.service';
import { List } from '../list';
import { CreateNewDialogComponent } from './create-new-dialog.component';

import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: List;

  createNewDialogRef: MatDialogRef<CreateNewDialogComponent>;

  constructor(private listService: ListService, private dialog: MatDialog) { }
  lists: List[];
  tasks: any[];

  ngOnInit() {
  }

  toggle(task) {
    this.listService.toggleTask(task);
    task.complete = !task.complete;
  }

  // getList(listId): void {
  //   this.list = this.listService.getList(this.listId);
  // }

  addNew(): void {
    this.createNewDialogRef = this.dialog.open(CreateNewDialogComponent, {
      width: '250px',
      data: { name: 'list' }
    });

    this.createNewDialogRef.afterClosed().subscribe(result => {
    });
  }
}
