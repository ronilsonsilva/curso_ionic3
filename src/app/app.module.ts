import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { BadgesPage } from '../pages/badges/badges';
import { BotoesPage } from '../pages/botoes/botoes';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { RadioButtonPage } from '../pages/radio-button/radio-button';
import { RangePage } from '../pages/range/range';
import { DateTimePage } from '../pages/date-time/date-time';
import { FabPage } from '../pages/fab/fab';
import { GridPage } from '../pages/grid/grid';
import { IconesPage } from '../pages/icones/icones';
import { InputPage } from '../pages/input/input';
import { TooglePage } from '../pages/toogle/toogle';
import { LoadingPage } from '../pages/loading/loading';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { SegmentsPage } from '../pages/segments/segments';
import { TabsPage } from '../pages/tabs/tabs';
import { SelectPage } from '../pages/select/select';
import { MenuPage } from '../pages/menu/menu';
import { NavegacaoPage } from '../pages/navegacao/navegacao';
import { Pagina1Page } from '../pages/pagina1/pagina1';
import { Pagina2Page } from '../pages/pagina2/pagina2';
import { ModalPage } from '../pages/modal/modal';
import { ModalConteudoPage } from '../pages/modal-conteudo/modal-conteudo';
import { SlidePage } from '../pages/slide/slide';
import { TypographyPage } from '../pages/typography/typography';
import { ChipsPage } from '../pages/chips/chips';
import { PopOverPage } from '../pages/pop-over/pop-over';
import { EstilizacaoPage } from '../pages/estilizacao/estilizacao';
import { CameraPage } from '../pages/camera/camera';
import { Camera } from '@ionic-native/camera';
import { CepPage } from '../pages/cep/cep';
import { CepProvider } from '../providers/cep/cep';
import { HttpModule } from '@angular/http';
import { BarcodePage } from '../pages/barcode/barcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RadioButtonPage,
    RangePage,
    DateTimePage,
    FabPage,
    GridPage,
    IconesPage,
    InputPage,
    ListPage,
    TooglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentsPage,
    TabsPage,
    SelectPage,
    MenuPage,
    NavegacaoPage,
    Pagina1Page,
    Pagina2Page,
    ModalPage,
    ModalConteudoPage,
    SlidePage,
    TypographyPage,
    ChipsPage,
    PopOverPage,
    EstilizacaoPage,
    CameraPage,
    CepPage,
    BarcodePage,
    LocalizacaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AlertPage,
    ActionSheetPage,
    BadgesPage,
    BotoesPage,
    CardPage,
    CheckboxPage,
    RadioButtonPage,
    RangePage,
    DateTimePage,
    FabPage,
    GridPage,
    IconesPage,
    InputPage, 
    ListPage,
    TooglePage,
    LoadingPage,
    ToastPage,
    ToolbarPage,
    SegmentsPage,
    TabsPage,
    SelectPage,
    MenuPage,
    NavegacaoPage,
    Pagina1Page,
    Pagina2Page,
    ModalPage,
    ModalConteudoPage,
    SlidePage,
    TypographyPage,
    ChipsPage,
    PopOverPage,
    EstilizacaoPage,
    CameraPage,
    CepPage,
    BarcodePage,
    LocalizacaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    CepProvider,
    BarcodeScanner,
    Geolocation
  ]
})
export class AppModule {}
