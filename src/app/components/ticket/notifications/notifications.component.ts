import { Notify } from './../../../commons/notify';
import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit {
  notifications: Notify[];
  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getNotifications().subscribe(data => {
      this.notifications = data.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
      console.log(data);
    });
  }

}
