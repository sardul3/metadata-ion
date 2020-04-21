import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  authorSelected = false;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.authorSelected = false;
    console.log(this.authorSelected);
  }

  authorFilter(ev) {
    this.authorSelected = !this.authorSelected;

    console.log(this.authorSelected);

    if (this.authorSelected) {
      this.ticketService.filterByAuthor.emit(this.authorSelected);
      ev.target.selected = true;

    } else {
      this.ticketService.filterByAuthor.emit(this.authorSelected);

    }
  }
}
