import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {User} from "../../model/user.model";
import {Course} from "../../model/course.model";
import {CourseService} from "../course.service";
import {Content} from "../../model/content.model";
import {DomSanitizer} from "@angular/platform-browser";
import {UserService} from "../../user/user.service";
import {ContentCreateComponent} from "../../content/content-create/content-create.component";
import {ContentService} from "../../content/content.service";

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
    likes!: number;
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
                private userService: UserService) {
    }

    ngOnInit(): void {
        this.href = this.router.url;
        this.id = +this.href.split('/')[2];
        this.onGetCourseById(this.id);
        this.onGetLikes(this.id);

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

    onGetLikes(id: number) {
        this.courseService.getLikesByCourseId(id).subscribe(
            likes => {
                this.likes = likes
            }
        )
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
                       principal: User) {
        this.courseService.addLikesToCourseByStudentId(id, principal);
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

