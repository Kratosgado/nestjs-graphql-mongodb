import { LessonService } from "./lesson.service";
import { CreateLessonInput } from "./lesson.input";
import { AssignStudentsToLessonInput } from "./assign-student-to-lesson.input";
export declare class LessonResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    getAllLessons(): Promise<import("./lesson.entity").Lesson[]>;
    getLesson(id: string): Promise<import("./lesson.entity").Lesson>;
    createLesson(createLessonInput: CreateLessonInput): Promise<import("./lesson.entity").Lesson>;
    assignStudentsToLesson(assignStudentsToLesson: AssignStudentsToLessonInput): Promise<import("./lesson.entity").Lesson>;
}
