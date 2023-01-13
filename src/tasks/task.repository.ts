import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';

@Injectable()
export class TaskRepository extends Repository<TaskEntity> {
  constructor(
    @InjectRepository(TaskEntity)
    repository: Repository<TaskEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
