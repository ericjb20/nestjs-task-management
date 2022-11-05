import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

// TasksService being added to the providers array allows us to inject this
// service into the TasksController because the controller is defined in this module
// TasksService will need to have the @injectable annotation for injection to work
// Providers are items that can be injected
@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
