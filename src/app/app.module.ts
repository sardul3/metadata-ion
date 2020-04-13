import { FormsModule } from '@angular/forms';
import { CreateTicketComponent } from './components/ticket/create-ticket/create-ticket.component';
import { TicketListComponent } from './components/ticket/ticket-list/ticket-list.component';
import { MetadataListComponent } from './components/metadata-list/metadata-list.component';
import { MetadataDetailComponent } from './components/metadata-detail/metadata-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {TimeAgoPipe} from 'time-ago-pipe';


@NgModule({
  declarations: [AppComponent,  HomepageComponent, MetadataDetailComponent,
                 MetadataListComponent, TicketListComponent, CreateTicketComponent,
                TimeAgoPipe],
  entryComponents: [CreateTicketComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
