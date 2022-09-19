import {Component, OnInit} from '@angular/core';
import {CourseService} from "../../service/course.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  ngOnInit(): void {
    this.courseService.getCourses(6).subscribe(
      (result: any) => {
        console.log(result);
      }
    );
  }

  constructor(private courseService: CourseService) {
  }

}
