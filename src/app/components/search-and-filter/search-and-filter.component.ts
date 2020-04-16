import { TicketService } from 'src/app/services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss'],
})
export class SearchAndFilterComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit() {}

  search(event) {
    this.ticketService.searchText.emit(event.target.value);
  }
}
