import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Todo } from "./todos/interfaces";
import { Add, AddRequest, Remove, Toggle } from "./todos/actions";
import { Observable } from "rxjs";
import { selectFeatureCount } from "./todos/selectors";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  todos$: Observable<Todo[]> = this.store.select(state => state.todoState);
  todoCount$: Observable<number> = this.store.select(selectFeatureCount);

  newTodoText: string = "";

  constructor(private store: Store<{ todoState: Array<Todo> }>) {}

  addTodo() {
    this.store.dispatch(
      AddRequest({ text: this.newTodoText || "Untitled task" })
    );
    this.newTodoText = "";
  }

  removeTodo(id) {
    this.store.dispatch(Remove({ id }));
  }

  toggleTodo(id) {
    this.store.dispatch(Toggle({ id }));
  }
}
