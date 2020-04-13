import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Ticket } from '../commons/ticket';
import { Project } from '../commons/project';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get<TicketResponse>('http://localhost:8080/tickets').pipe(
      map(response => response._embedded.tickets)
    );
  }

  createTicket(title: string, description: string, createdOn: Date) {
    return this.http.post('http://localhost:8080/tickets', {title, description, createdOn, createdBy: 'admin' });
  }

  getProjects() {
    return this.http.get<ProjectResponse>('http://localhost:8080/projects').pipe(
      map(response => response._embedded.projects)
    );
  }
}


interface TicketResponse {
  _embedded: {
    tickets: Ticket[];
  };
}


interface ProjectResponse {
  _embedded: {
    projects: Project[];
  };
}

