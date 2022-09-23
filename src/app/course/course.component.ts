import {Component, OnInit} from "@angular/core";
import {User} from "../model/user.model";
import {Course} from "../model/course.model";
import {CourseService} from "./course.service";
import {MatDialog} from "@angular/material/dialog";
import {CourseUpdateComponent} from "./course-update/course-update.component";
import {UserService} from "../user/user.service";
import {CourseCreateComponent} from "./course-create/course-create.component";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses!: Array<Course>;
  mentor!: User;

  constructor(private sanitizer: DomSanitizer,
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

  getEmbedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
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

  onCreate(name: string,
           description: string,
           logoUrl: string,
           movieUrl: string,
           dateEnd: Date,
           status: string,
           principal: User) {
    this.dialog.open(CourseCreateComponent, {
      width: '330px',
      disableClose: true,
      data: {
        name: name,
        description: description,
        logoUrl: logoUrl,
        movieUrl: movieUrl,
        dateEnd: dateEnd,
        status: status,
        principal: principal
      }
    })
  }
}

// onDelete(id: bigint) {
//   this.slotService.delete(id);
// }

