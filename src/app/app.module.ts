import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AppComponent } from "./app.component";
import { todoReducer } from "./todos/reducer";
import { MovieEffects } from "./todos/effects";

import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    EffectsModule.forRoot([MovieEffects]),
    StoreModule.forRoot({
      todoState: todoReducer
    })
  ],
  declarations: [AppComponent],
  providers: [MovieEffects],
  bootstrap: [AppComponent]
})
export class AppModule {}
