// Pipes:
// Pipes are operate on the arguments to be proceed by the route handler before, just before the handler is called
// Pipes can perform Data-Transformation or Data-Validations
// Pipes can return Data ( original / modified ) which will be passed on to the route handler
// Pipes can throw exceptions, exceptions thrown will be handled by NestJs and parsed to an error response
// Pipes can be asynchronous

// Types of pipes
// Parameter level
// Tend to be slimmer and cleaner, however, they often result in extra code added to the handler, this can get messy and hard to maintain

// Handler level
// Require some more code, but, it comes with great benefits:
// No extra code on the parameter level
// Easier to maintain and expand, i.e if the data shape changed it will be easy to apply changes via the pipe only.
// The responsibility to identify the arguments to process is shifted to one centralized place - the pipe file -
import { IsNotEmpty } from 'class-validator';

// DTO: Data Transfer Objects
// It used to describe the shape of data coming via request
// DTO can be a class or an interface
// NestJs documentations encourage to use class as it's can be compile to JS not like interfaces
// DTO is not NestJs concept only, it's common in SWE community
// DTO has no behavior, it's only used for storing, retriving, serialize and deserialize it's own data
// DTO can be used for data validations
// DTO is not a model
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
