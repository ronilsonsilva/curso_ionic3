import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {

  brilhoDaTela : number = 100;
  doacao : number = 10;
  faixaEtaria: any = {lower:16, upper:60};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangePage');
  }

}
