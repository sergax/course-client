import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {Course} from "../../model/course.model";
import {CourseService} from "../course.service";
import {Content} from "../../model/content.module";
import {DomSanitizer} from "@angular/platform-browser";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  href: string = "";
  mentor!: Array<User>;
  content!: Array<Content>;
  course!: Course;
  courses!: Array<Course>;
  mode: string;
  buttonText: any;
  id!: number;

  constructor(private sanitizer: DomSanitizer,
              private courseService: CourseService,
              private router: Router,
              private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.href = this.router.url;
    this.id = +this.href.split('/')[2];
    this.onGetCourseById(this.id);
  }

  onGetCourseById(id: number) {
    this.courseService.getCourseById(id).subscribe(
      course => {
        this.course = course;
      }
    );
  }

  getEmbedUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onGetContents(): Array<Content> {
    return this.course.content;
  }

  changeMode(mode: string) {

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

