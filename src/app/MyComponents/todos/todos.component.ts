import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem: string;

  constructor() {
    this.localItem = localStorage.getItem("todos")
    console.log(this.localItem);
    // this.todos =[
    //   // {
    //   //   sno:1,
    //   //   title: "this is title",
    //   //   desc : "lorem23",
    //   //   active: true


    //   // },
    //   // {
    //   //   sno:2,
    //   //   title: "this is title2",
    //   //   desc : "lorem2  fahffjf3",
    //   //   active: true


    //   // }, {
    //   //   sno:3,
    //   //   title: "this is title3",
    //   //   desc : "lorem23",
    //   //   active: true


    //   // },
    // ]
    if (this.localItem == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localItem)
    }

  }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo) {
    //console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    // const index = this.todos.indexOf(todo);
    // this.todos.splice(index,1);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  toggleTodo(todo: Todo) {
    //console.log(todo)

    const index = this.todos.indexOf(todo);
    //console.log(todo,index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));


  }

}
