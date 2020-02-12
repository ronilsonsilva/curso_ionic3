import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-modal-conteudo',
  templateUrl: 'modal-conteudo.html',
})
export class ModalConteudoPage {

  usuario:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.usuario = this.navParams.get("usuario");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalConteudoPage');
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }
  fecharModalComParametro(){
    let param = "Ronilson Silva";
    this.viewCtrl.dismiss(param);
  }
}
