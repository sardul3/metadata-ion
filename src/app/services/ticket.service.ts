import { AuthService } from './auth/auth.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Ticket } from '../commons/ticket';
import { Project } from '../commons/project';
import { Developer } from '../commons/developer';
import { Note } from '../commons/note';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  searchText = new EventEmitter<string>();
  filterByAuthor = new EventEmitter<boolean>();

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

  getTicket(id: number) {
    return this.http.get<Ticket>(`http://localhost:8080/get-ticket/${id}`).pipe(
      map(response => response)
    );
  }

  setStatus(ticketId: number, status: string) {
    return this.http.post<Ticket>(`http://localhost:8080/set-status`, {ticketId, status}).pipe(
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

  removeDeveloperFromTicket(devId: number, ticketId: number) {
    return this.http.post('http://localhost:8080/remove-developer', {devId, ticketId});
  }

  assignNoteToTicket( noteText: string, createdAt: Date, ticketId: number) {
    const createdBy = this.authService.getUsername();
    return this.http.post<NoteInterface>('http://localhost:8080/add-note', {text: noteText, createdAt, ticketId, createdBy }).pipe(
      map(response => response.notes)
    );
  }
}


interface TicketResponse {
  _embedded: {
    tickets: Ticket[];
  };
}

interface NoteInterface {
  notes: Note;
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

