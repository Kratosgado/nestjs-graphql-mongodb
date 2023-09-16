import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
export declare class LessonService {
    private lessonRepository;
    constructor(lessonRepository: Repository<Lesson>);
    createLesson(name: string, startDate: string, endDate: string): Promise<Lesson>;
    getLesson(id: string): Promise<Lesson>;
}
