import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Ticket } from '../commons/ticket';
import { Project } from '../commons/project';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient) { }

  getTickets() {
    return this.http.get('http://localhost:8080/get-tickets').pipe(
      map(response => response)
    );
  }

  createTicket(title: string, description: string, projectId: number) {
    // tslint:disable-next-line: max-line-length
    return this.http.post('http://localhost:8080/create-ticket', {title, description, createdBy: 'admin', createdOn: new Date(), projectId });
  }

  getProjects() {
    return this.http.get<ProjectResponse>('http://localhost:8080/projects').pipe(
      map(response => response._embedded.projects)
    );
  }

  // getProject(ticketId: number) {
  //   return this.http.get<Project>(`http://localhost:8080/tickets/${ticketId}/project`).pipe(take(1),
  //     map(response => response)
  //   );
  // }

  deleteTicket(ticketId: number) {
    return this.http.delete(`http://localhost:8080/tickets/${ticketId}`).pipe(take(1),
      map(response => response)
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

