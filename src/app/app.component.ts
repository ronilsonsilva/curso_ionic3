import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
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
import { NavegacaoPage } from '../pages/navegacao/navegacao';
import { ModalPage } from '../pages/modal/modal';
import { SlidePage } from '../pages/slide/slide';
import { TypographyPage } from '../pages/typography/typography';
import { ChipsPage } from '../pages/chips/chips';
import { PopOverPage } from '../pages/pop-over/pop-over';
import { EstilizacaoPage } from '../pages/estilizacao/estilizacao';
import { CameraPage } from '../pages/camera/camera';
import { CepPage } from '../pages/cep/cep';
import { BarcodePage } from '../pages/barcode/barcode';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'ActionSheet', component: ActionSheetPage },
      { title: 'Alert', component: AlertPage },
      { title: 'Badge', component: BadgesPage },
      { title: 'Botões', component: BotoesPage },
      { title: 'Card', component: CardPage },
      { title: 'Checkbox', component: CheckboxPage },
      { title: 'RadioButton', component: RadioButtonPage },
      { title: 'Range', component: RangePage },
      { title: 'DateTime', component: DateTimePage },
      { title: 'Fab', component: FabPage },
      { title: 'Grid', component: GridPage },
      { title: 'Ícone', component: IconesPage },
      { title: 'Inputs', component: InputPage },
      { title: 'List', component: ListPage },
      { title: 'Toggle', component: TooglePage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Toast', component: ToastPage },
      { title: 'Toolbar', component: ToolbarPage },
      { title: 'Segments', component: SegmentsPage },
      { title: 'Tabs', component: TabsPage },
      { title: 'Select', component: SelectPage },
      { title: 'Navegação', component: NavegacaoPage },
      { title: 'Modal', component: ModalPage },
      { title: 'Slide', component: SlidePage },
      { title: 'Typography', component: TypographyPage },
      { title: 'Chips', component: ChipsPage },
      { title: 'Popover', component: PopOverPage },
      { title: 'Estilizacao', component: EstilizacaoPage },
      { title: 'Camera', component: CameraPage },
      { title: 'CEP', component: CepPage },
      { title: 'Barcode', component: BarcodePage },
      { title: 'Localizacao', component: LocalizacaoPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
