import { Component, VERSION } from '@angular/core';
//import { Hero } from './Models/Hero';
//import { HeroService } from './Services/hero.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
}
