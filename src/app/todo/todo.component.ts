import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/interfaces/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  title = "TODO List";
  paragraph = "A place to store your todos";
  todoObjects: Todo[] = [
    { task: "Fold clothes", completed: false },
    { task: "Put clothes in dresser", completed: false },
    { task: "Relax", completed: false },
    { task: "Try to pet cat", completed: true },
    { task: "Pet dog", completed: false },
    { task: "Be awesome", completed: false }
  ];
  button: string;
  placeholder1: "Filter your to-dos";
  placeholder2: "Add your to-do";

  constructor() {}
  ngOnInit() {}
}
