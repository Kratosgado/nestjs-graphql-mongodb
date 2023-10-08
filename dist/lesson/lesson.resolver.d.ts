import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assign-student-to-lesson.input";
import { Lesson } from "./lesson.entity";
import { StudentService } from "src/student/student.service";
export declare class LessonResolver {
    private lessonService;
    private studentService;
    constructor(lessonService: LessonService, studentService: StudentService);
    getAllLessons(): Promise<Lesson[]>;
    getLesson(id: string): Promise<Lesson>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(assignStudentsToLesson: AssignStudentsToLessonInput): Promise<Lesson>;
    students(lesson: Lesson): Promise<import("../student/student.entity").Student[]>;
}
