import { Component } from '@angular/core';

/**
 * Generated class for the Segment3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'segment3',
  templateUrl: 'segment3.html'
})
export class Segment3Component {

  text: string;

  constructor() {
    console.log('Hello Segment3Component Component');
    this.text = 'Hello World';
  }

}
