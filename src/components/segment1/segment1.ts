import { Component } from '@angular/core';

/**
 * Generated class for the Segment1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'segment1',
  templateUrl: 'segment1.html'
})
export class Segment1Component {

  text: string;
  meetingDetails = []

  constructor() {
    console.log('Hello Segment1Component Component');
    this.text = 'Hello World';
    this.meetingDetails = [
      {name: 'Test',
      project: 'Test Project',
      location: 'Meeting room 1',
      time: '6:00 PM',
      duration: ' 1 hour',},
      {participants: ['jack  ',' jill ',' john ',' jacob ']},
      {description: 'Very first test meeting',
      objectives: 'test the test to test if it tests'}
    ]
  }

}
