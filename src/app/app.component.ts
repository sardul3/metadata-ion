import { TicketService } from 'src/app/services/ticket.service';
import { AuthService } from './services/auth/auth.service';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userIsLoggedIn: boolean;
  notificationCount = 0;
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private ticketService: TicketService,
    private menuController: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.loggedInUserEvent.subscribe(data => {
        this.userIsLoggedIn = data;
        this.ticketService.getNotifications().subscribe(notifications => {
          this.notificationCount = notifications.length;
        });
      });
    });
  }


  close() {
    this.menuController.toggle();
  }

  logout() {
    this.authService.loggedInUserEvent.emit(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.close();
  }

  fetchNotifications() {


  }
}
