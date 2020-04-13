import { Project } from './project';
export class Ticket {
    id: number;
    title: string;
    description: string;
    createdBy: string;
    createdOn: Date;
    projectId: number;
    project: Project;
    developers: string[];
  }