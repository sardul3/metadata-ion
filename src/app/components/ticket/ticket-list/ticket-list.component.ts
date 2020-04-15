import { AddDevelopersComponent } from './../add-developers/add-developers.component';
import { Project } from './../../../commons/project';
import { CreateTicketComponent } from './../create-ticket/create-ticket.component';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/commons/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ModalController, ToastController, AlertController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  tickets;

  constructor(private ticketService: TicketService,
              private modalController: ModalController,
              private toastController: ToastController,
              private alertController: AlertController,
              private popoverController: PopoverController) { }

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


   deleteTicket(ticketId: number) {
    this.alertController.create({
      header: 'Delete the ticket',
      subHeader: 'Are you sure?',
      buttons: [{
                  text: 'Cancel',
                  role: 'cancel'
                },
                {
                  text: 'Delete',
                  handler: () => {
                    this.ticketService.deleteTicket(ticketId).subscribe(data => {
                      const toast = this.toastController.create({
                        color: 'primary',
                        message: 'Ticket has been deleted',
                        duration: 2000
                      }).then(el => {
                        el.present();
                        this.ionViewWillEnter();
                      });
                    });
                  }
                }
                ]
    }).then(el => el.present());

  }

showAddDevelopers(ev: any, ticket: Ticket) {
  this.popoverController.create({
    component: AddDevelopersComponent,
    componentProps: {ticket: ticket},
    event: ev,
    translucent: true
  }).then(popoverEl => popoverEl.present());
}

}
