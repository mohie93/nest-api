// This is the starting point of the application
// Modules are effective way to organize components by closely related set of capabilities
// It's a good practice to isolate modules by folder per module, containing the module's components
// Modules are singletons, therefore a module can be imported by multiple other modules

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

// Define a module
@Module({
  // Array of providers to be export to other modules👇
  exports: [],
  // Array of modules required by this module
  // Any exported provider from other modules will be available in our module
  // via dependencies injection👇
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'mohie',
      password: 'dean1331',
      database: 'task-management-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  // Array of controllers to be instantiated within the modules👇
  controllers: [],
  // Array of providers to be available within the module via
  // dependencies injection👇
  providers: [],
})
export class AppModule {}
