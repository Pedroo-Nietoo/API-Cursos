import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) { }

  @Get()
  @ApiOkResponse({ description: 'List of all courses' })
  async getCourses() {
    const courses = await this.coursesService.getCourses();
    return courses;
  }

  @Get(':courseId')
  @ApiOkResponse({ description: 'List of one course' })
  async getCourse(@Param('courseId') courseId) {
    //localhost:3000/courses/2
    const course = await this.coursesService.getCourse(courseId);
    return course;
  }

  @Post()
  @ApiCreatedResponse({ description: 'Added a course' })
  async addCourse(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.addCourse(createCourseDto);
    return course;
  }

  @Delete()
  @ApiOkResponse({ description: 'Removed a course' })
  async deleteCourse(@Query() query) {
    //localhost:3000/courses?courseId=2
    const course = await this.coursesService.deleteCourse(query.courseId);
    return course;
  }
}
