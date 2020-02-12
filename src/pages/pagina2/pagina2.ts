import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  parametro:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.parametro = this.navParams.get("parametro");
  }

  ionViewDidLoad() {
  }

  fecharPagina(){
    this.navCtrl.pop();
  }

}
