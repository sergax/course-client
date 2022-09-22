import {Component, OnInit} from "@angular/core";
import {User} from "../model/user.model";
import {Course} from "../model/course.model";
import {CourseService} from "./course.service";
import {MatDialog} from "@angular/material/dialog";
import {CourseUpdateComponent} from "./course-update/course-update.component";
import {UserService} from "../user/user.service";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses!: Array<Course>;
  mentor!: User;

  constructor(
    private courseService: CourseService,
    private userService: UserService,
    private dialog: MatDialog) {

    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
      }
    );

    this.userService.getUser().subscribe(
      mentor => {
        this.mentor = mentor;
      }
    );

  }

  ngOnInit(): void {


  }

  onUpdate(id: number,
           name: string,
           description: string,
           logoUrl: string,
           movieUrl: string,
           dateStart: Date,
           dateEnd: Date,
           status: string,
           principal: User) {
    this.dialog.open(CourseUpdateComponent, {
      width: '330px',
      disableClose: true,
      data: {
        id: id,
        name: name,
        description: description,
        logoUrl: logoUrl,
        movieUrl: movieUrl,
        dateStart: dateStart,
        dateEnd: dateEnd,
        status: status,
        principal: principal
      }
    })
  }
}

// onCreate() {
//   this.dialog.open(CreateSlotComponent, {
//     width: '330px',
//     disableClose: true,
//     data: {}
//   })
// }

// onDelete(id: bigint) {
//   this.slotService.delete(id);
// }

