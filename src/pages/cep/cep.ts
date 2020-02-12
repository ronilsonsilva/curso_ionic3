import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { CepProvider } from '../../providers/cep/cep';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {

  // cepDigitado: number;
  form: FormGroup;
  response : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private CepProvider: CepProvider, private fb: FormBuilder, 
    private toastCrl : ToastController, public loadingCtrl: LoadingController) {
    this.form = this.fb.group({
      cepDigitado: ['', Validators.compose([
        Validators.required
      ])],
    });
  }

  ionViewDidLoad() {
    
  }

  consultarEndereco(){
    let aguarde = this.loadingCtrl.create({
      content: "Processando..."
    });
    aguarde.present();
    let cep = this.form.controls['cepDigitado'].value;
    this.CepProvider.listarEndereco(cep).then((dados) => {
      this.response = dados.json();
      // console.log('Sucesso -> ', dados.json());
      aguarde.dismiss();
    }).catch((dados) =>{
      // console.log('error ->',dados.json());
      this.toastCrl.create({
        message: "CEP não encontrado! Tente novamente.",
        showCloseButton: true,
        closeButtonText: "OK",
        position: "top"
      }).present();
      aguarde.dismiss();
    });
  }

}
