import { ToastController } from '@ionic/angular';
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
  constructor(private ticketService: TicketService, private toastController: ToastController) { }

  ngOnInit() {
    this.ticketService.getNotifications().subscribe(data => {
      this.notifications = data.filter(d => d.seen !== true).sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1);
    });
  }

  deleteNotification(notification) {
    this.ticketService.readNotification(notification.id).subscribe(data => {
      console.log(data);
      const toast = this.toastController.create({
        color: 'warning',
        message: `Notification is no longer visible`,
        duration: 2000
      }).then(el => {
        el.present();
        this.ngOnInit();
      });
    });
  }

}
