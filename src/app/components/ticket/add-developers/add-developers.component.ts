import { ToastController } from '@ionic/angular';
import { Developer } from './../../../commons/developer';
import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-developers',
  templateUrl: './add-developers.component.html',
  styleUrls: ['./add-developers.component.scss'],
})
export class AddDevelopersComponent implements OnInit {
  developers: Developer[];
  @Input() ticket;

  constructor(private ticketService: TicketService, private toastController: ToastController) { }

  ngOnInit() {
    // this.ticketService.getDevelopers().subscribe(data => {
    //   this.developers = data;
    // });
  }

  ionViewWillEnter() {
    this.ticketService.getDevelopers().subscribe(data => {
      this.developers = data;
    });
  }

  addDeveloperToTicket(developer: Developer) {
    console.log(!this.isDeveloperPresent(developer));
    if (!this.isDeveloperPresent(developer)) {
      this.ticketService.assignDeveloperToTicket(this.ticket.id, developer.id).subscribe(data => {
        this.ticket = data;
        const toast = this.toastController.create({
          color: 'primary',
          message: `${developer.name} is added to the ticket`,
          duration: 2000
        }).then(el => {
          el.present();
          this.ionViewWillEnter();
        });
    });
  }
  }

  isDeveloperPresent(developer: Developer): boolean {
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.ticket.developers.length; i++ ) {
      if (this.ticket.developers[i].id === developer.id) {
        return true;
      }
    }
    return false;
  }
}
