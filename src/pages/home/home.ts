import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  slides = [
    {
      title: "Seja bem vindo ao App teste do Ionic 3!",
      description: "Este aplicativo foi desenvolvido somente para apresentar os recursos/componentes existente no Ionic 3, portanto sem nenhum objetivo comercial, apenas como um exercício de aprendizagem da Framework.",
      image: "../../assets/imgs/Home/slide_1.png",
    },
    {
      title: "Qual objetivo do APP?",
      description: "Esse aplicativo foi desenvolvido como exercício do curso de desenvolvimento mobile com Ionic 3. Apenas apresenta exemplo de uso dos componentes existente na framework.",
      image: "../../assets/imgs/Home/slide_2.png",
    },
    {
      title: "Quem é o desenvolvedor?",
      description: "Desenvolvido por <b>Ronilson Silva</b>, Analista de Sistemas Jr. da Telesite Telecomunicações, como plano de ação do treinamento de desenvolvimento de aplicaçãos híbridas.",
      image: "../../assets/imgs/Home/slide_3.png",
    }
  ];
}
