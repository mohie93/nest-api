// NestJs Providers
// - Can be injected into constructors if decorated as an @Injectable, via dependency injection
// - Can be a plain value, a class, sync/async function factory, ...etc
// - Providers mist be provided to a module for them to be usable
// - Can be exported from a module - and them be available to other modules that import it
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus, TaskEditableAttributes } from './task.model';
import { v4 as uuidV4 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

// Dependency injection in NestJs
// - Any component within the NestJS ecosystem can inject a provider that is
//   decorated with the @Injectable
// - We define the dependencies in the constructor of the class.
//   NestJs will take care of the injection for us,
//   and it will then be available as a class property.
@Injectable()
// NestJs Services
// - Defined as providers. Not all providers are services
// - Common concept within software development and
//   are not exclusive NestJs, JS, or backend development
// - Singleton when wrapped with @Injectable() and provided to a module.
//     - Than means, the same instance will be shared across the application
//       acting as a single source of truth
// - The main source of business logic. for example, a service will be called from
//   a controller to validate data, create an item in the database
//   and return a response
export class TasksService {
  private _tasks: Task[] = [];

  public get tasks(): Task[] {
    return this._tasks;
  }

  getTaskById(taskId: string): Task {
    const task: Task = this._tasks.find((t) => t.id === taskId);
    return task;
  }

  deleteTaskById(taskId: string) {
    this._tasks = this._tasks.filter((t) => t.id !== taskId);
  }

  updateTaskById(taskId: string, attributes: TaskEditableAttributes): Task {
    const task: Task = this.getTaskById(taskId);
    if (task) {
      for (const attribute in attributes) {
        if (Object.keys(task).includes(attribute))
          task[attribute] = attributes[attribute];
      }
    }
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuidV4(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };

    this._tasks = [...this._tasks, task];
    return task;
  }
}
