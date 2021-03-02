import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import {v4 as uuidv4} from "uuid";

import {TodoService} from '../../services/todo.service';
@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  todoTitle:string;
  constructor(private todoService:TodoService ) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const newTodo : Todo ={
      id:uuidv4(),
      title : this.todoTitle,
      isCompleted:false,
      date : new Date()
    };

    this.todoService.addTodo(newTodo);
    this.todoTitle = "";
  }
}
