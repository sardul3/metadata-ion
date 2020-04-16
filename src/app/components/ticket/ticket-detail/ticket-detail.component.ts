import { ToastController } from '@ionic/angular';
import { AuthService } from './../../../services/auth/auth.service';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/commons/ticket';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/commons/note';
import { Developer } from 'src/app/commons/developer';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  ticketId: number;
  ticket = new Ticket();
  notes: Note[];
  loggedInUser: string;
  developers: Developer[];
  inviteDevelopers: Developer[];
  allDevelopers: Developer[];

  constructor(private route: ActivatedRoute,
              private ticketService: TicketService,
              private authService: AuthService,
              private toastController: ToastController) { }



  ngOnInit() {
    this.ticketService.getDevelopers().subscribe(devs => {
      this.allDevelopers = devs;
      this.inviteDevelopers = this.allDevelopers.filter(dev => !this.isDeveloperPresent(dev));

    });
  }

  ionViewWillEnter() {
    // this.ticketService.getDevelopers().subscribe(devs => {
    //   this.allDevelopers = devs;
    // });

    this.route.paramMap.subscribe(data => {
      if (this.route.snapshot.paramMap.has('id')) {
        this.ticketId = +this.route.snapshot.paramMap.get('id');
        this.ticketService.getTicket(this.ticketId).subscribe(ticket => {
          this.ticket = ticket;
          this.notes = ticket.notes;
          this.developers = ticket.developers;
          this.inviteDevelopers = this.allDevelopers.filter(dev => !this.isDeveloperPresent(dev));
        });
      }
    });
  }

  noteSubmit(form: NgForm, ticket: Ticket) {
    console.log(form.form.value.note);
    const noteText = form.form.value.note;
    this.ticketService.assignNoteToTicket(noteText, new Date(), ticket.id).subscribe(data => {
      this.notes.push(data);
      // this.ngOnInit();
      this.ionViewWillEnter();
    });
    form.reset();
  }

  isDeveloperPresent(developer: Developer): boolean {
        // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.developers.length; i++ ) {
      if (this.developers[i].id === developer.id) {
        return true;
      }
    }
    return false;
  }

  addDeveloperToTicket(developer: Developer) {
    console.log(!this.isDeveloperPresent(developer));
    if (!this.isDeveloperPresent(developer)) {
      this.ticketService.assignDeveloperToTicket(this.ticket.id, developer.id).subscribe(data => {
        const toast = this.toastController.create({
          color: 'success',
          message: `${developer.name} is added to the ticket`,
          duration: 2000
        }).then(el => {
          el.present();
          this.ionViewWillEnter();
        });
    });
  }
  }

  removeDeveloperFromTicket(developer: Developer) {
    console.log(developer.id);
    console.log(this.ticket.id);
    this.ticketService.removeDeveloperFromTicket(developer.id, this.ticket.id).subscribe(data => {
      const toast = this.toastController.create({
        color: 'warning',
        message: `${developer.name} is deleted from the ticket`,
        duration: 2000
      }).then(el => {
        el.present();
        this.ionViewWillEnter();
      });
    });

  }
}
