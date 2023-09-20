import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assign-student-to-lesson.input";
import { Lesson } from "./lesson.entity";

@Resolver(of => LessonType)
export class LessonResolver {
   constructor(private lessonService: LessonService) { }
   
   @Query(returns => [LessonType])
   getAllLessons() {
      return this.lessonService.getAllLessons();
   }
   
   @Query(returns => LessonType)
   getLesson(
      @Args('id') id: string,
   ) {
      return this.lessonService.getLesson(id);
   }

   @Mutation( returns => LessonType)
   createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
      return this.lessonService.createLesson(createLessonInput);
   }

   @Mutation(returns => LessonType)
   assignStudentsToLesson(@Args('assignStudentsToLessonInput') assignStudentsToLesson: AssignStudentsToLessonInput) {
      return this.lessonService.assignStudentsToLessons(assignStudentsToLesson);
   }

   @ResolveField()
   async students(@Parent() lesson: Lesson) {
      console.log(lesson);
   }
}