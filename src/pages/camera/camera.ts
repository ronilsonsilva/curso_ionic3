import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { CameraOptions, Camera } from '@ionic-native/camera';


@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  foto: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public cameraCtrl: Camera, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
  }

  tirarFoto(){
    const option : CameraOptions = {
      quality: 100,
      destinationType: this.cameraCtrl.DestinationType.DATA_URL,
      encodingType: this.cameraCtrl.EncodingType.JPEG,
      mediaType: this.cameraCtrl.MediaType.PICTURE
    };
    this.cameraCtrl.getPicture(option).then((imageData) =>{
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.foto = base64Image;
    }, (err) =>{
      this.toastCtrl.create({
        message: "Erro ao tirar foto",
        showCloseButton: true,
        closeButtonText: "OK",
        position: "top"
      }).present();
    });
  }
}
