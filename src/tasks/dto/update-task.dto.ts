import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskEditableAttributes, TaskStatus } from '../task.model';

export class UpdateTaskDto implements TaskEditableAttributes {
  @IsEnum(TaskStatus)
  @IsNotEmpty()
  status: TaskStatus;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
