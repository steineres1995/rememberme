import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  tasks:Task[] = [];

  constructor(
    private taskService:TasksService
  ) {
    this.getTasks();
   }

  ngOnInit(): void {
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(
      (data:Task[]) => {
        this.tasks = data;
      }
    );
  }

}
