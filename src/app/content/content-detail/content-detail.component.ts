import {Component, Inject, OnInit, Sanitizer} from '@angular/core';
import {ContentService} from "../content.service";
import {Content} from "../../model/content.model";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {User} from "../../model/user.model";
import {CourseUpdateComponent} from "../../course/course-update/course-update.component";
import {ContentUpdateComponent} from "../content-update/content-update.component";
import {UserService} from "../../user/user.service";
import {CourseService} from "../../course/course.service";
import {Course} from "../../model/course.model";

@Component({
    selector: 'app-content-detail',
    templateUrl: './content-detail.component.html',
    styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
    mentor!: User;
    content!: Content;
    course!: Course;
    href: string = "";
    id!: number;
    isUpdated: boolean = false;

    constructor(private dialog: MatDialog,
                private contentService: ContentService,
                private courseService: CourseService,
                private userService: UserService,
                private router: Router,
                private sanitizer: DomSanitizer) {
        this.href = this.router.url;
        this.id = +this.href.split('/')[3];
        this.onGetContentById(this.id);
    }

    ngOnInit(): void {
        this.userService.getUser().subscribe(
            mentor => {
                this.mentor = mentor;
            }
        )

        this.courseService.getCourseById(this.content.courseId).subscribe(
            course => {
                this.course = course;
            }
        )

    }

    getEmbedUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    onGetContentById(id: number) {
        this.contentService.getContentById(id).subscribe(
            content => {
                this.content = content;
            }
        );
    }

    onUpdateContent(id: number,
                    name: string,
                    text: string,
                    movieUrl: string,
                    principal: User) {
        this.dialog.open(ContentUpdateComponent, {
            width: '500px',
            disableClose: true,
            data: {
                id: id,
                name: name,
                text: text,
                movieUrl: movieUrl,
                principal: principal
            }
        })
    }

}
