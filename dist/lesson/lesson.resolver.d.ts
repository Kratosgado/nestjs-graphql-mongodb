import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assign-student-to-lesson.input";
import { Lesson } from "./lesson.entity";
export declare class LessonResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    getAllLessons(): Promise<Lesson[]>;
    getLesson(id: string): Promise<Lesson>;
    createLesson(createLessonInput: CreateLessonInput): Promise<Lesson>;
    assignStudentsToLesson(assignStudentsToLesson: AssignStudentsToLessonInput): Promise<Lesson>;
    students(lesson: Lesson): Promise<void>;
}
