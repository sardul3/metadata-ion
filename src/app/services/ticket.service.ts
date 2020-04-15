import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Ticket } from '../commons/ticket';
import { Project } from '../commons/project';
import { Developer } from '../commons/developer';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient,
              private authService: AuthService) { }

  createBasicAuthHeader() {
    const username = 'user';
    const password = 'user';
    const basicHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicHeaderString;
  }


  getTickets() {
    return this.http.get('http://localhost:8080/get-tickets').pipe(
      map(response => response)
    );
  }

  createTicket(title: string, description: string, projectId: number) {
    // tslint:disable-next-line: max-line-length
    console.log(new Date());
    return this.http.post('http://localhost:8080/create-ticket', {title, description,
               createdBy: this.authService.userIsLoggedIn() ? localStorage.getItem('user') : 'admin',
                createdOn: new Date(), projectId });
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

  getDevelopers() {
    return this.http.get<DeveloperResponse>('http://localhost:8080/developers').pipe(
      map(response => response._embedded.developers)
    );
  }

  assignDeveloperToTicket(ticketId: number, developerId: number) {
    return this.http.post('http://localhost:8080/add-developer', {ticketId, developerId});
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

interface DeveloperResponse {
  _embedded: {
    developers: Developer[];
  };
}

