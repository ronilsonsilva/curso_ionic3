import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-segments',
  templateUrl: 'segments.html',
})
export class SegmentsPage {

  pet:String = "ducklings";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentsPage');
  }

}
