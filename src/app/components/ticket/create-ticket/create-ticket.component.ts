import { Project } from './../../../commons/project';
import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss'],
})
export class CreateTicketComponent implements OnInit {
  availableProjects: Project[];

  constructor(private ticketService: TicketService,
              private modalController: ModalController,
              ) { }

  ngOnInit() {
    this.ticketService.getProjects().subscribe(data => {
      this.availableProjects = data;
    })
  }

  submitTicket(form) {
    console.log(form.value);
    console.log(form.value.ticketProject);
    // tslint:disable-next-line: max-line-length
    this.ticketService.createTicket(form.value.ticketTitle, form.value.ticketDescription, form.value.ticketProject).subscribe(data => {
      console.log(data);
    });
    form.reset();
    this.modalController.dismiss();


  }

}
