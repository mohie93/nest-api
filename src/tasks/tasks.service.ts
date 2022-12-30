// NestJs Providers
// - Can be injected into constructors if decorated as an @Injectable, via dependency injection
// - Can be a plain value, a class, sync/async function factory, ...etc
// - Providers mist be provided to a module for them to be usable
// - Can be exported from a module - and them be available to other modules that import it
import { Injectable } from '@nestjs/common';

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
  private _tasks = [];

  public get tasks() {
    return this._tasks;
  }

  doSomething() {
    return "Yo, I'm doing my work!";
  }
}
