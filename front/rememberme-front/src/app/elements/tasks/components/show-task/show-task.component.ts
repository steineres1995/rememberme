import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../../shared/models/task.model';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  @Input() task: Task;

  constructor() {
   }

  ngOnInit(): void {
  }

}
