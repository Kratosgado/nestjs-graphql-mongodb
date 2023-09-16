import { Field, InputType } from "@nestjs/graphql";
import second from 'class-validator'

@InputType()
export class CreateLessonInput {
   @Field()
   name: string;

   @Field()
   startDate: string;

   @Field()
   endDate: string;
}