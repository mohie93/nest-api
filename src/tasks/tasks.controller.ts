// Responsible for handling incoming requests and returning responses to the client
// Bound to a specific path (i.e "/tasks" for the tasks resources)
// Contain handlers, which handle endpoints and request methods (POST, GET, PATCH...etc)
// Can take advantage od dependency injection to consume providers within the same module

// ForumModule For Controller
// 1 - Http request incoming
// 2 - Request routed to Controller
// 2 - 1 - Handler is called with arguments
// 2 - 2 - NestJs will parse the relevant request data
//         and it will be available in the handler
// 3 - Handler handle the request
// 3 - 1 - Perform operations such as communicate with a service.
//         i.e Retrieving and Item from DataBase
// 4 - Handler returns response value
// 4 - 1 - Response can be in any formate type (XML, Json)
// 4 - 2 - Nest will wrap the response value as an HTTP response
//         and return it to the client
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';
// Controllers are defined by decorating a class with @Controller decorator
// The decorator accepts a string, which is the path to be handled by the controllers
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  // defining a handler
  // Handlers are methods within the decorated class
  // Handlers method decorated with decorators such as @GET, @POST, @Delete ...etc
  @Get()
  getAllTasks(): Task[] {
    // do stuff
    return this.tasksService.tasks;
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param() params): Task {
    const { id } = params;
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTaskById(@Param() params) {
    const { id } = params;
    return this.tasksService.deleteTaskById(id);
  }
}
