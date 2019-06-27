import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Conditional } from '@angular/compiler';


/**
 * Generated class for the Segment2Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'segment2',
  templateUrl: 'segment2.html'
})

export class Segment2Component implements OnInit {
  @Output() changeView = new EventEmitter();
 

  text: string;
  questions: any = [];
  currentQuestion: any;
  nextQuestion: any;
  nextIndex: number;
  questionsCompleted: boolean = false;
  reviewActive: boolean = false;
  reviewCompleted: boolean = false;
  lastQuestion: boolean = false;
  constructor() {
    console.log('Hello Segment2Component Component');
    this.text = 'Hello World';
    this.questions = [
      {number: 1,
      question: "what?",
      choices: [1,2,3,4]},
      {number: 2,
      question: "when?",
      choices: [1,2,3,4]},
      {number: 3,
      question: "where?",
      choices: [1,2,3,4]},
      {number: 4,
      question: "why?",
      choices: [1,2,3,4]},
      {number: 5,
      question: "How?",
      choices: [1,2,3,4]},
    ]
    this.currentQuestion = this.questions[0]
    this.nextIndex = 1
    console.log("on constructor", this.currentQuestion)
  }
  ionViewDidLoad(){
    console.log("seg2 did load")
  }
  toQuestion(question){
    this.currentQuestion = question
    console.log("was clicked", question)
    console.log("current question", this.currentQuestion)
    this.questionsCompleted = false
  }
  toNextQuestion(){
    this.checkLastQuestion()
    console.log("next was clicked")
    console.log("question length", this.questions.length)
    if(this.nextIndex < this.questions.length){
      this.currentQuestion = this.questions[this.nextIndex]
      this.nextIndex++
      console.log("next index", this.nextIndex)
    }else{
      this.questionsCompleted = true
      this.reviewActive = true
      console.log("finished test")
    } 
  }
  checkLastQuestion(){
    if(this.nextIndex == this.questions.length-1){
      this.lastQuestion = true
      console.log("last question", this.lastQuestion)
    }else{
      this.lastQuestion = false
      console.log('not last question', this.lastQuestion)
    }
  }
  checkLastQuestionSelected(){
    if(this.nextIndex == this.questions.length){
      this.lastQuestion = true
      console.log("last question", this.lastQuestion)
    }else{
      this.lastQuestion = false
      console.log('not last question', this.lastQuestion)
    }
  }
  setNextQuestion(index){
    this.nextQuestion = this.questions[index]
    this.nextIndex= index
    this.checkLastQuestionSelected()
    console.log("index",index, this.nextIndex)
    console.log("next question", this.nextQuestion)
  }
  reviewComplete(){
    this.reviewCompleted = true
    this.onChangeView()
    console.log("review complete", this.reviewCompleted)
  }
  toReview(){
    this.questionsCompleted = true
    console.log('to review was clicked')
  }
  returnToQuestion(){
    this.checkLastQuestionSelected()
    this.questionsCompleted = false
    console.log('return to questions was clicked')
  }
  onChangeView(){
    this.changeView.emit()
  }
  ngOnInit() {
    console.log("component has been initialized!")
  }
}
