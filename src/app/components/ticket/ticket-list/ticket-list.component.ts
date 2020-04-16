import { AuthService } from './../../../services/auth/auth.service';
import { AddDevelopersComponent } from './../add-developers/add-developers.component';
import { Project } from './../../../commons/project';
import { CreateTicketComponent } from './../create-ticket/create-ticket.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/commons/ticket';
import { TicketService } from 'src/app/services/ticket.service';
import { ModalController, ToastController, AlertController, PopoverController, IonReorderGroup } from '@ionic/angular';


@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  tickets;
  filteredTickets;
  searchText;
  filterByAuthor;

  constructor(private ticketService: TicketService,
              private modalController: ModalController,
              private toastController: ToastController,
              private alertController: AlertController,
              private popoverController: PopoverController,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
      this.filteredTickets = this.tickets;
    });

  }

  ionViewWillEnter() {
    this.ticketService.filterByAuthor.subscribe(data => {
      if (data) {
        this.filteredTickets = this.tickets.filter(ticket => ticket.createdBy === this.authService.getUsername());
      } else {
        this.ngOnInit();
      }
    });
    
    this.ticketService.searchText.subscribe(searchText => {
      this.searchText = searchText;
      this.filteredTickets = this.tickets.filter(ticket => ticket.title.toLowerCase().includes(searchText.toLowerCase()));
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateTicketComponent
    });
    modal.onDidDismiss().then(el => this.ngOnInit());
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
                        color: 'warning',
                        message: 'Ticket has been deleted',
                        duration: 2000
                      }).then(el => {
                        el.present();
                        this.ngOnInit();
                      });
                    });
                  }
                }
                ]
    }).then(el => el.present());

  }

showAddDevelopers(ev, ticket: Ticket) {

  this.popoverController.create({
    component: AddDevelopersComponent,
    componentProps: {ticket},
    event: ev,
    cssClass: ['custom-popover'],
    translucent: true
  }).then(popoverEl => {
    popoverEl.present();
  }
    );
}

seeStatus(check) {
  console.log(!check.checked);
  this.filterByAuthor = !check.checked;
  this.ticketService.filterByAuthor.emit(!check.checked);
}

}
