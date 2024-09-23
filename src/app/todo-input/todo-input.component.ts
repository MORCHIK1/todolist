import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent {
  currTask = "";

  filter: "all" | "active" | "done" = "all";

  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }

  deleteItem(item: { description: string}) {
    this.allItems = this.allItems.filter((i) => i !== item);
  }
}

