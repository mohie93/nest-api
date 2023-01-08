export enum TaskStatus {
  OPEN = 'open',
  IN_PROGRESS = 'in progress',
  DONE = 'done',
}

export interface TaskEditableAttributes {
  title: string;
  description: string;
  status: TaskStatus;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
