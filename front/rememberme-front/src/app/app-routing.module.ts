import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './shared/components/about/about.component';


const appRoutes: Routes = [
  { path:'', component:AboutComponent},
  { 
    path:'tasks' ,
    loadChildren: () => import('../app/elements/tasks/tasks.module').then(m => m.TasksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
