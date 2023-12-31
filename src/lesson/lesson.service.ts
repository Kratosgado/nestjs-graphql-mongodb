import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-student-to-lesson.input';

@Injectable()
export class LessonService {
   constructor(
      @InjectRepository(Lesson)
      private lessonRepository: Repository<Lesson>,
   ) { }

   async getAllLessons(): Promise<Lesson[]> {
      return this.lessonRepository.find();
   }
   
   async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
      const { name, startDate, endDate, students } = createLessonInput;
      
      const lesson = this.lessonRepository.create({
         id: uuid(), name, startDate, endDate, students
      });

      return this.lessonRepository.save(lesson);
   }

   async getLesson(id: string): Promise<Lesson> {
      return this.lessonRepository.findOneBy({ id: id });
   }

   async assignStudentsToLessons(assignStudentsToLesson: AssignStudentsToLessonInput): Promise<Lesson> {
      const { lessonId, studentIds } = assignStudentsToLesson;

      const lesson = await this.getLesson(lessonId);

      lesson.students = [...lesson.students, ...studentIds];
      return this.lessonRepository.save(lesson);
   }
}
