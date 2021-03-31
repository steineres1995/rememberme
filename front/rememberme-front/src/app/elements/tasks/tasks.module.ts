import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTaskComponent } from './components/show-task/show-task.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';



@NgModule({
  declarations: [ShowTaskComponent, ListTasksComponent, CreateTaskComponent, TasksComponent],
  imports: [
    TasksRoutingModule,
    CommonModule
  ],
  exports:[
    TasksComponent,
    ShowTaskComponent,
    ListTasksComponent
  ]
})
export class TasksModule { }
