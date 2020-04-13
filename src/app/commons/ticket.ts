import { Project } from './project';
export class Ticket {
    title: string;
    description: string;
    createdBy: string;
    createdOn: Date;
    project: Project;
    developers: string[];
  }