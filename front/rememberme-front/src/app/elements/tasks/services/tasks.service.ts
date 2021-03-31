import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Task } from '../../../shared/models/task.model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  TASK_URL = environment.url_server+'/tasks';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<Task>> {
    return this.http.get<Task[]>(this.TASK_URL+'/all',this.httpOptions);
  }
}
