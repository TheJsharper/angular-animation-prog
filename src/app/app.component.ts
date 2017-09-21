import {Component} from '@angular/core';
import {animate, AnimationBuilder, style} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private builder: AnimationBuilder) {

  }

  animate(theDiv:HTMLDivElement): void {
    const animation = this.builder.build([
      style({        backgroundColor:'red', width:'200px'}),
      animate(300, style({width:'100%', backgroundColor:'red'})),
      animate(300)
    ]);
    animation.create(theDiv).play();

  }
}
