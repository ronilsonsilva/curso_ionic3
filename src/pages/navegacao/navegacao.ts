import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pagina1Page } from '../pagina1/pagina1';
import { Pagina2Page } from '../pagina2/pagina2';


@Component({
  selector: 'page-navegacao',
  templateUrl: 'navegacao.html',
})
export class NavegacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavegacaoPage');
  }

  abrirPagina1ComRoot(){
    this.navCtrl.setRoot(Pagina1Page)
  }
  abrirPagina2ComRoot(){
    this.navCtrl.setRoot(Pagina2Page)
  }
  abrirPagina1ComPush(){
    this.navCtrl.push(Pagina1Page);
  }
  abrirPagina2ComPush(){
    this.navCtrl.push(Pagina2Page);
  }
  abrirPagina2ComParametro(){
    let parametro = {nome: 'Ronilson Silva', idade: 22};
    this.navCtrl.push(Pagina2Page,{parametro: parametro});
  }
}
