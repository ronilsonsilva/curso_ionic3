import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }
  abrirActionSheet(){
    let actionSheet = this.actionSheetCtrl.create({
      title: "Opções",
      buttons: [
        {
          icon: 'american-football',
          text: 'Opção A',
          role: 'destructive',
          handler: ()=>{
            alert("Você clicou na opção A.")
          }
        },
        {
          icon: 'logo-android',
          text: 'Opção B',
          handler: ()=>{
            alert("Você clicou na opção B.")
          }
        },
        {
          icon: 'aperture',
          text: 'Opção C',
          handler: ()=>{
            alert("Você clicou na opção C.")
          }
        },
        {
          icon: 'exit',
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    })

    actionSheet.present();
  }

}
