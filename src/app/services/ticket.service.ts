import { AuthService } from './auth/auth.service';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Ticket } from '../commons/ticket';
import { Project } from '../commons/project';
import { Developer } from '../commons/developer';
import { Note } from '../commons/note';
import {Notify} from '../commons/notify';

import * as Stomp from 'stompjs';

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
    return this.http.get('https://warm-falls-42436.herokuapp.com/get-tickets').pipe(
      map(response => response)
    );
  }

  // getProjects() {
  //   return this.http.get<Project[]>('http://localhost:8080/projects').pipe(
  //     map(response => response)
  //   );
  // }

  getTicket(id: number) {
    return this.http.get<Ticket>(`https://warm-falls-42436.herokuapp.com/get-ticket/${id}`).pipe(
      map(response => response)
    );
  }

  setStatus(ticketId: number, status: string) {
    return this.http.post<Ticket>(`https://warm-falls-42436.herokuapp.com/set-status`, {ticketId, status}).pipe(
      map(response => response)
    );
  }

  createTicket(title: string, description: string, projectId: number) {
    // tslint:disable-next-line: max-line-length
    console.log(new Date());
    return this.http.post('https://warm-falls-42436.herokuapp.com/create-ticket', {title, description,
               createdBy: this.authService.userIsLoggedIn() ? localStorage.getItem('user') : 'admin',
                createdOn: new Date(), projectId });
  }

  createProject(name: string, nickname: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.post('https://warm-falls-42436.herokuapp.com/projects', {name, nickname,
               owner: this.authService.userIsLoggedIn() ? localStorage.getItem('user') : 'admin' });
  }

  getProjects() {
    return this.http.get<ProjectResponse>('https://warm-falls-42436.herokuapp.com/projects').pipe(
      map(response => response._embedded.projects)
    );
  }

  getProject(ticketId: number) {
    return this.http.get<Project>(`https://warm-falls-42436.herokuapp.com/tickets/${ticketId}/project`).pipe(take(1),
      map(response => response)
    );
  }

  deleteTicket(ticketId: number) {
    return this.http.delete(`https://warm-falls-42436.herokuapp.com/tickets/${ticketId}`).pipe(take(1),
      map(response => response)
    );
  }

  getDevelopers() {
    return this.http.get<DeveloperResponse>('https://warm-falls-42436.herokuapp.com/developers').pipe(
      map(response => response._embedded.developers)
    );
  }

  getNotifications() {
    return this.http.get<Notify[]>('https://warm-falls-42436.herokuapp.com/get-notifications').pipe(
      map(response => response)
    );
  }

  readNotification(notifyId: number) {
    return this.http.post<Notify>('https://warm-falls-42436.herokuapp.com/read-notification', {id: notifyId}).pipe(
      map(response => response)
    );
  }

  assignDeveloperToTicket(ticketId: number, developerId: number) {
    return this.http.post('https://warm-falls-42436.herokuapp.com/add-developer', {ticketId, developerId});
  }

  removeDeveloperFromTicket(devId: number, ticketId: number) {
    return this.http.post('https://warm-falls-42436.herokuapp.com/remove-developer', {devId, ticketId});
  }

  assignNoteToTicket( noteText: string, createdAt: Date, ticketId: number) {
      const createdBy = this.authService.getUsername();
      // tslint:disable-next-line: max-line-length
      return this.http.post<NoteInterface>('https://warm-falls-42436.herokuapp.com/add-note', {text: noteText, createdAt, ticketId, createdBy }).pipe(
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

