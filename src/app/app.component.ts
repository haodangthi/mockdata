import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosService } from './services/todos.service'
import { Todo } from './models/todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mockdata';
  todos$:Observable<Todo[]>;
    constructor(private todosService: TodosService){
      this.todos$ =todosService.entities$
    }
  
  ngOnInit(){
    
  }

  getTodos(){
    this.todosService.getAll()
  }

  addTodo(todoTitle:string){
    this.todosService.add({title: todoTitle})
  }
}
