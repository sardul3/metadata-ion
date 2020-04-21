import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/commons/ticket';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  tickets;
  selectedProject: number;
  allProjects;

  constructor(private ticketService: TicketService,
              private pickerController: PickerController) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.ticketService.getTickets().subscribe(data => {
      this.tickets = data;
      console.log('all tickets ', this.tickets);
      console.log('selected project ', this.selectedProject);
      if (this.selectedProject) {
      console.log("selected project: INSIDE");
      this.tickets = this.tickets.filter(ticket => ticket.project.id === this.selectedProject);
      } else {
      this.tickets = this.tickets.sort((a, b) => (a.createdOn < b.createdOn) ? 1 : -1);
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

}
