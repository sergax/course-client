import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {Course} from "../../model/course.model";
import {CourseService} from "../course.service";
import {Content} from "../../model/content.model";
import {DomSanitizer} from "@angular/platform-browser";
import {UserService} from "../../user/user.service";
import {CourseCreateComponent} from "../course-create/course-create.component";
import {ContentCreateComponent} from "../../content/content-create/content-create.component";
import {ContentService} from "../../content/content.service";

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
    href: string = "";
    id!: number;
    course!: Course;
    content!: Content;
    courses!: Array<Course>;
    mode: string;
    user!: User;

    constructor(private sanitizer: DomSanitizer,
                private courseService: CourseService,
                private router: Router,
                private dialog: MatDialog,
                private contentService: ContentService,
                private userService: UserService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.href = this.router.url;
        this.id = +this.href.split('/')[2];
        this.onGetCourseById(this.id);

        this.userService.getUser().subscribe(
            user => {
                this.user = user;
            }
        )
    }

    onGetCourseById(id: number) {
        this.courseService.getCourseById(id).subscribe(
            course => {
                this.course = course;
            }
        );
    }

    onUpdateCourseById(id: number, course: Course, mentor: User) {
        this.courseService.getCourseById(id).subscribe(
            course => {
                this.course = course;
            }
        );
    }

    getEmbedUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    onCreateContent() {
        this.dialog.open(ContentCreateComponent, {
            width: '330px',
            disableClose: true,
            data: {}
        })
    }

    onAddLikesToCourse(id: number,
                       likes: boolean,
                       principal: User) {
        this.courseService.addLikesToCourseByStudentId(id, likes, principal);
    }

    onGetContents(): Array<Content> {
        return this.course.contents;
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

