import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { IconesPage } from '../icones/icones';


@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCrtl: PopoverController) {
  }

  ionViewDidLoad() {
    
  }

  abrirPopOver(){
    this.popoverCrtl.create(IconesPage).present();
  }

}
