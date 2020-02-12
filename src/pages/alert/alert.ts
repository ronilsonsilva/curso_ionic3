import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  basicAlert(){
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: 'Ionic Mobile App!!!',
      buttons: ['Entendi']
    });
    alert.present();
  }

  confirmAlert(){
    let confirmAlert = this.alertCtrl.create({
      title: 'Alerta de confirmação',
      message: 'Confirmation Alerts are used when it is required that the user explicitly confirms a particular choice before progressing forward in the app',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            alert("Botao Cancelar");
          }
        },
        {
          text: 'OK',
          handler: ()=>{
            alert("Botão OK");
          }
        }
      ]
    });
    confirmAlert.present();
  }

  inputAlert(){
    let inpAlert = this.alertCtrl.create({
      title: 'Prompt Alerts',
      inputs: [
        {
          name: 'usuario',
          placeholder: 'Usuario',
          label: 'Usuario',
          type: 'text'
        },
        {
          name: 'senha',
          placeholder: 'Senha',
          label: 'Senha',
          type: 'password'
        }
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data =>{
            alert("Botão Cancelar");
          }
        },
        {
          text: 'OK',
          handler: data=>{
             alert("Botão OK. Usuario = " + data.usuario + ", Senha = " + data.senha + "");
          }
        }
      ]
    });
    inpAlert.present();
  }

  radioAlert(){
    let rdAlert = this.alertCtrl.create({});
    rdAlert.setTitle('Escolha a cor');
    rdAlert.addInput({
      type: 'radio',
      label: 'Azul',
      value: 'blue',
      checked: true
    });
    rdAlert.addInput({
      type: 'radio',
      label: 'Vermelho',
      value: 'red',
      checked: false
    });
    rdAlert.addInput({
      type: 'radio',
      label: 'Verde',
      value: 'green',
      checked: false
    });

    rdAlert.addButton('Cancelar');
    rdAlert.addButton({
      text: 'OK',
      handler: (data: any)=>{
        alert("Value da radio selecionado: " + data);
      }
    });
    rdAlert.present();
  }
  checkAlert(){
    let checkAlert = this.alertCtrl.create({});
    checkAlert.setTitle('Quais frutas você gosta?');
    checkAlert.addInput({
      type: 'checkbox',
      label: 'Laranja',
      value: 'orange',
      checked: false
    });
    checkAlert.addInput({
      type: 'checkbox',
      label: 'Banana',
      value: 'banana',
      checked: false
    });
    checkAlert.addInput({
      type: 'checkbox',
      label: 'Pêra',
      value: 'pera',
      checked: false
    });
    checkAlert.addButton('Cancelar');
    checkAlert.addButton({
      text: 'OK',
      handler: (data: any)=> {
        alert("Você gosta das frutas: " + data);
      }
    });
    checkAlert.present();
  }

}
