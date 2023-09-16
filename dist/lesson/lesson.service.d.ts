import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    createLesson(name: any, startDate: any, endDate: any): Promise<Lesson>;
}
