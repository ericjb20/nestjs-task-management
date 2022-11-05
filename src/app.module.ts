import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
})

/*
 * It is a goog practice to have a folder per module, containing the module's components 
 * Modules are singletons, therefore a module can be imported by multiple other modules
 */
export class AppModule {}
