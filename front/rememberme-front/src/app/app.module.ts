import { RouterModule } from '@angular/router';
import { HttpClientModule  } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksModule } from './elements/tasks/tasks.module'; 
import { MenuComponent } from './shared/components/menu/menu.component';
import { AboutComponent } from './shared/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    TasksModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
