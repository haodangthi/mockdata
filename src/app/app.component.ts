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
  todo;
  title = 'mockdata';
  todos$:Observable<Todo[]>;
    constructor(private todosService: TodosService){
      this.todos$ =todosService.entities$
    }
  
  ngOnInit(){
    console.log(this.todos$);
    console.log(this.todosService.getAll());
    
    this.todosService.getAll().subscribe(res=>console.log(res))
     
  }
    

  getTodos(){
    this.todosService.getAll()
  }

  addTodo(){
    console.log(this.todo)
    this.todosService.add({title: this.todo})
  }
}
