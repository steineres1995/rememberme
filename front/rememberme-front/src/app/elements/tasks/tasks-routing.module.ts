import { TasksComponent } from './components/tasks/tasks.component';
import { ListTasksComponent } from './components/list-tasks/list-tasks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path:'',
    component: TasksComponent,
    children:[
      {
        path:'',
        component: ListTasksComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
