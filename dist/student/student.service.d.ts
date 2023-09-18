import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
export declare class StudentService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    getAllStudent(): Promise<Student[]>;
    createStudent(createStudentInput: CreateStudentInput): Promise<Student>;
}
