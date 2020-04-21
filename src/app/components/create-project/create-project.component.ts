import { ModalController } from '@ionic/angular';
import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {

  constructor(private ticketService: TicketService,
              private modalController: ModalController) { }

  ngOnInit() {}

  submitProject(createTicket) {
    console.log(createTicket.value.projectName);
    console.log(createTicket.value.projectNickname);
    this.ticketService.createProject(createTicket.value.projectName, createTicket.value.projectNickname)
                      .subscribe(data => {
                        console.log(data);
                        this.modalController.dismiss();
                        createTicket.reset();
                      });

  }
  closeModal() {
    this.modalController.dismiss();
  }

}
