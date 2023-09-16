import { LessonService } from "./lesson.service";
export declare class LessonResolver {
    private lessonService;
    constructor(lessonService: LessonService);
    getLesson(id: string): Promise<import("./lesson.entity").Lesson>;
    createLesson(name: string, startDate: string, endDate: string): Promise<import("./lesson.entity").Lesson>;
}
