import {Component, OnInit} from "@angular/core";
import {User} from "../model/user.model";
import {Course} from "../model/course.model";
import {CourseService} from "./course.service";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses!: Array<Course>;
  mentors!: Array<User>;

  constructor(
    public userService: UserService,
    private courseService: CourseService,
    private dialog: MatDialog) {

    this.courseService.getCourses().subscribe(
      courses => {
        this.courses = courses;
      }
    );

    this.userService.getUsers().subscribe(
      mentors => {
        this.mentors = mentors;
      }
    )
  }

  ngOnInit(): void {
  }

}

// onUpdate(id: bigint) {
//   this.dialog.open(UpdateSlotComponent, {
//     width: '330px',
//     disableClose: true,
//     data: {
//       groupLimit: groupLimit,
//       id: id
//     }
//   })
// }

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

