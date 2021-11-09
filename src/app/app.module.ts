import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeroComponent } from './Components/hero/hero.component';
import { GameComponent } from './Components/game/game.component';
import { VillanComponent } from './Components/villan/villan.component';
import { ResultComponent } from './Components/result/result.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeroComponent,
    GameComponent,
    VillanComponent,
    ResultComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
