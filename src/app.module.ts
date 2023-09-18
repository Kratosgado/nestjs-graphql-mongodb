import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://127.0.0.1:27017/school',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
    }),
    LessonModule,
    StudentModule
  ],
})
export class AppModule {}
function ApolloServerPluginLandingPageDisabled(): import("@apollo/server").ApolloServerPlugin<any> {
  throw new Error('Function not implemented.');
}

function ApolloServerPluginLandingPageGraphQLPlayground(): import("@apollo/server").ApolloServerPlugin<any> {
  throw new Error('Function not implemented.');
}

