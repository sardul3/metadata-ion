import { CreateTicketComponent } from './../create-ticket/create-ticket.component';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/commons/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  tickets: Ticket[];

  constructor(private ticketService: TicketService,
              private modalController: ModalController) { }

  ngOnInit(): void {}

  ionViewWillEnter() {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
    });
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateTicketComponent
    });
    modal.onDidDismiss().then(el => this.ionViewWillEnter());
    return await modal.present();
  }

}
