import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateCourseDto {
  @ApiProperty({ type: Number, description: 'ID' })
  readonly id: number;
  @ApiProperty({ type: String, description: 'Course title' })
  readonly title: string;
  @ApiProperty({ type: String, description: 'Course description' })
  readonly description: string;
}
