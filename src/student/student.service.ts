import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';

import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';


@Injectable()
export class StudentService {
   constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) { }

   async getAllStudents(): Promise<Student[]> {
      return this.studentRepository.find();
   }

   async getStudentById(id: string): Promise<Student> {
      return this.studentRepository.findOneBy({id})
   }
   
   async createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
      const { firstName, secondName } = createStudentInput;
      
      const newStudent = this.studentRepository.create({
         id: uuid(), firstName, secondName
      });
      return this.studentRepository.save(newStudent);
   }

   async getManyStudents(studentIds: string[]): Promise<Student[]>{
      return this.studentRepository.find({
         where: {
             id: studentIds[0] 
      }});
   }
}
