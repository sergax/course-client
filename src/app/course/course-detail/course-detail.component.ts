import {Component, OnInit} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
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
    progress!: number;

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
        this.onGetProgressByStudent(this.id)

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
        window.location.reload()
    }

    onPassedContentByStudent(contentId: number,
                             principal: User) {
        this.contentService.passedContentByStudentId(contentId, principal);
    }

    onGetProgressByStudent(courseId: number) {
        this.contentService.getProgressByStudent(courseId).subscribe(
            progress => {
                this.progress = progress
            }
        );
    }

}
