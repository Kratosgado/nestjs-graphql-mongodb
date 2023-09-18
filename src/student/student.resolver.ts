import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { LessonType } from "src/lesson/lesson.type";
import { CreateStudentInput } from "./create-student.input";


@Resolver(of=> StudentType)
export class StudentResolver {
   constructor(private studentService: StudentService) { }

   @Query(returns => [StudentType])
   getAllStudents() {
      return this.studentService.getAllStudents();
   }

   @Query(returns => StudentType)
   getStudentById(@Args('id') id: string) {
      return this.studentService.getStudentById(id);
   }
   
   @Mutation(returns => StudentType)
   createStudent(@Args('createStudentInput') createStudentInput: CreateStudentInput) {
      return this.studentService.createStudent(createStudentInput);
   }
}