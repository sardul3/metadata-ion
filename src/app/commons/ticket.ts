import { Developer } from './developer';
import { Project } from './project';
import { Note } from './note';
export class Ticket {
    id: number;
    title: string;
    description: string;
    createdBy: string;
    createdOn: Date;
    projectId: number;
    project: Project;
    developers: Developer[];
    notes: Note[];
    status: string;
  }