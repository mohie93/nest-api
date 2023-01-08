import { IsNotEmpty } from 'class-validator';
import { TaskEditableAttributes, TaskStatus } from '../task.model';

export class UpdateTaskDto implements TaskEditableAttributes {
  @IsNotEmpty()
  status: TaskStatus;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
