import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast(posicao:string){
    this.toastCrl.create({
      message: "Exemplo de toast",
      duration: 3000,
      position: posicao
    }).present();
  }

  showLongToast(){
    this.toastCrl.create({
      message: "Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.Lorem ipsunm dolor sit amet.",
      duration: 3000
    }).present();
  }

  showToastComButton(){
    this.toastCrl.create({
      message: "Toast com close button",
      showCloseButton: true,
      closeButtonText: "OK",
      position: "top"
    }).present();
  }
}
