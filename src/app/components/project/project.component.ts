import { CreateProjectComponent } from './../create-project/create-project.component';
import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/commons/ticket';
import { PickerController, ModalController } from '@ionic/angular';
import { CreateTicketComponent } from '../ticket/create-ticket/create-ticket.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  tickets;
  selectedProject: number;
  allProjects;
  header: string;

  constructor(private ticketService: TicketService,
              private pickerController: PickerController,
              private modalController: ModalController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
      if (this.selectedProject) {
      // tslint:disable-next-line: max-line-length
      this.tickets = this.tickets.filter(ticket => ticket.project.id === this.selectedProject).sort((a, b) => (a.createdOn < b.createdOn) ? 1 : -1);
      this.header = `Tickets in ${this.selectedProject}`;
      } else {
      this.tickets = this.tickets.sort((a, b) => (a.createdOn < b.createdOn) ? 1 : -1);
      this.header = `All Tickets`;

      }
      console.log(this.tickets);
    });

    this.ticketService.getProjects().subscribe(data => {
      this.allProjects = data;
    });
  }

  async openPicker() {
    console.log(this.getColumnOptions());
    const picker = await this.pickerController.create({
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
      {
        text: 'Ok',
        handler: (value: any) => {
          this.selectedProject = value.Projects.value;
          this.ionViewWillEnter();
        }
      }],
      columns: [{ name: 'Projects', options: this.getColumnOptions() }]
    });
    await picker.present();
  }

  getColumnOptions() {
    const options = [];
    this.allProjects.forEach(x => {
      options.push({text: x.name, value: x.id});
    });
    return options;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CreateProjectComponent
    });
    modal.onDidDismiss().then(el => this.ngOnInit());
    return await modal.present();
  }

}
