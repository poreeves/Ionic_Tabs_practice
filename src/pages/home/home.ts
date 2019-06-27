import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  seg1: boolean = true;
  seg2: boolean = false;
  seg3: boolean = false;
  prep: string = 'seg1';
  constructor(public navCtrl: NavController) {

  }
  changeSeg1(){
    this.seg1 = true
    this.seg2 = false
    this.seg3 = false
    console.log("changetab1")
  }
  changeSeg2(){
    this.seg2 = true
    this.seg1 = false
    this.seg3 = false
    console.log("changetab2")
  }

  changeSeg3(){
    this.seg1 = false
    this.seg2 = false
    this.seg3 = true
  }

  toProfile(){
    console.log('to profile clicked')
  }
  onChangeViewToVideo(){
    console.log("onChangeViewToVideo fired")
    this.seg1 = false
    this.seg2 = false
    this.seg3 = true
    this.prep = 'seg3'
  }
  ngOnInit() {
    console.log("ngOnInit")
  }
}
