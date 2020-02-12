import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ModalConteudoPage } from '../modal-conteudo/modal-conteudo';


@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    
  }

  abrirModalBasico(){
    this.modalCtrl.create(TabsPage).present();
  }

  abrirModalComParametro(){
    let parametro = {nome: 'Ronilson Silva', idade: 22};

    this.modalCtrl.create(ModalConteudoPage, {usuario : parametro}).present();
  }

  abrirModalSemParametro(){
    let modal = this.modalCtrl.create(ModalConteudoPage);
    modal.onDidDismiss(data => {
      this.toastCtrl.create({
        message: data,
        duration: 3000,
        position: 'top'
      }).present();
    });
    modal.present();
  }

}
