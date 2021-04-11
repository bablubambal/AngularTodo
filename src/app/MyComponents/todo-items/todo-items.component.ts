import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo:Todo;
  @Input() i:string;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo:Todo){
    this.todoDelete.emit(todo);

    console.log("On click Called");
  }
  onCheckboxClick(todo){
    //console.log(todo)

    this.todoCheckbox.emit(todo);

  }

}
