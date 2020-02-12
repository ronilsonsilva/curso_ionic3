import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  intensLista:String[] = [
    "Abacaxi", "Laranja","Maçã", "Mamão", "Cebola","Abóbora","Pêra"
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clicouNaLista(){
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}
