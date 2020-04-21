import { MentionsComponent } from './../mentions/mentions.component';
import { ToastController, PopoverController } from '@ionic/angular';
import { AuthService } from './../../../services/auth/auth.service';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/commons/ticket';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/commons/note';
import { Developer } from 'src/app/commons/developer';
import { User } from 'src/app/commons/user';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss'],
})
export class TicketDetailComponent implements OnInit {
  ticketId: number;
  ticket = new Ticket();
  notes: Note[] = [];
  loggedInUser: User;
  developers: Developer[] = [];
  inviteDevelopers: Developer[] = [];
  allDevelopers: Developer[] = [];
  rangeValue: number;
  rangeColor = 'danger';
  rangeLabel = 'Not Started';

  constructor(private route: ActivatedRoute,
              private ticketService: TicketService,
              private authService: AuthService,
              private toastController: ToastController,
              private popoverController: PopoverController) { }

  ngOnInit() {
    // this.ticketService.getDevelopers().subscribe(devs => {
    //   this.allDevelopers = devs;
    //   this.inviteDevelopers = this.allDevelopers.filter(dev => !this.isDeveloperPresent(dev));
    // });
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe(data => {
      if (this.route.snapshot.paramMap.has('id')) {
        this.ticketId = +this.route.snapshot.paramMap.get('id');
        this.authService.getUser().subscribe(user => {
          this.loggedInUser = user;
        });
        this.ticketService.getTicket(this.ticketId).subscribe(ticket => {
          this.ticket = ticket;
          if (ticket) {
            this.ticketService.getDevelopers().subscribe(devs => {
              this.allDevelopers = devs.filter(dev => dev.name !== this.loggedInUser.username);
              this.inviteDevelopers = this.allDevelopers.filter(dev => !this.isDeveloperPresent(dev));
              this.rangeLabel = this.ticket.status;
              this.notes = ticket.notes.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
              this.developers = ticket.developers.filter(dev => dev.name !== this.loggedInUser.username);
              this.inviteDevelopers = this.allDevelopers.filter(dev => !this.isDeveloperPresent(dev));
              this.rangeLabel = this.ticket.status;
              this.rangeColor = this.mapStatus(this.rangeLabel)[0];
              this.rangeValue = +this.mapStatus(this.rangeLabel)[1];
            });
          }
        });
      }
    });
  }

  noteSubmit(form: NgForm, ticket: Ticket) {
    console.log(form.form.value.note);
    const noteText = form.form.value.note;

    this.ticketService.assignNoteToTicket(noteText, new Date(), ticket.id).subscribe(data => {
      this.notes.push(data);
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

  getAvatarFromNoteAuthor(note: Note) {
    // tslint:disable-next-line: prefer-for-of
    for ( let i = 0; i < this.allDevelopers.length; i++ ) {
      if (this.allDevelopers[i].name === note.createdBy) {
        return this.allDevelopers[i].avatar;
      }
    }
    return '2';
  }

  mapStatus(status: string) {
    switch (status) {
      case 'Not Started':
        this.rangeValue = 0;
        this.rangeColor = 'danger';
        return ['danger', '0'];
      case 'Initiated':
        this.rangeValue = 10;
        this.rangeColor = 'secondary';
        return ['secondary', '10'];
      case 'Almost Done':
        this.rangeValue = 20;
        this.rangeColor = 'tertiary';
        return ['tertiary', '20'];
      case 'Ticket resolved':
        this.rangeValue = 30;
        this.rangeColor = 'success';
        return ['success', '30'];
    }
  }

  statusChange(event) {
      if (this.rangeValue === 0 ) {
        this.rangeColor = 'danger';
        this.rangeLabel = 'Not Started';
      } else if (this.rangeValue > 0 && this.rangeValue <= 10 ) {
        this.rangeColor = 'secondary';
        this.rangeLabel = 'Initiated';
      }  else if (this.rangeValue > 10  && this.rangeValue <= 20 ) {
        this.rangeColor = 'tertiary';
        this.rangeLabel = 'Almost Done';
      } else if (this.rangeValue > 20  && this.rangeValue <= 30 ) {
        this.rangeColor = 'success';
        this.rangeLabel = 'Ticket resolved';
      }
      this.ticketService.setStatus(this.ticketId, this.rangeLabel).subscribe(data => {
        this.rangeLabel = data.status;
    });

  }


  dismissMentions() {
    console.log('space seen');
    this.popoverController.dismiss();
  }

}
