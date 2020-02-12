import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 3000

    });

    loader.present();
  }

  SalvarDados(){
    let loader = this.loadingCtrl.create({
      content: "Salvando..."
    });
    loader.present();
    //Processar algo
    setTimeout(()=>{
      console.log("Salvando...");
      loader.dismiss();
    },5000)
  }
}
