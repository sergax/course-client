import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ContentService} from "../content.service";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl, FormGroup} from "@angular/forms";
import {Content} from "../../model/content.model";
import {User} from "../../model/user.model";
import {UserService} from "../../user/user.service";
import {Course} from "../../model/course.model";
import {CourseService} from "../../course/course.service";

@Component({
    selector: 'app-content-update',
    templateUrl: './content-update.component.html',
    styleUrls: ['./content-update.component.css']
})
export class ContentUpdateComponent implements OnInit {
    updateForm!: FormGroup;
    isUpdated: boolean = false;
    content!: Content;
    user!: User;
    course!: Course;
    href: string = "";
    id!: number;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private contentService: ContentService,
                private userService: UserService,
                private router: Router,
                private courseService: CourseService,
                private sanitizer: DomSanitizer) {
        this.href = this.router.url;
        this.id = +this.href.split('/')[3];

        this.userService.getUser().subscribe(
            user => {
                this.user = user;
            }
        )

        this.contentService.getContentById(this.id).subscribe(
            content => {
                this.content = content;
            }
        );

        // this.courseService.getCourseById(this.content.courseId).subscribe(
        //     course => {
        //         this.course = course;
        //     }
        // );
    }

    ngOnInit(): void {
        this.updateForm = new FormGroup({
            'id': new FormControl(this.id),
            'name': new FormControl(this.data.name),
            'text': new FormControl(this.data.text),
            'movieUrl': new FormControl(this.data.movieUrl),
            'principal': new FormControl(this.data.principal),
        })
    }
    //
    // get id() {
    //     return this.updateForm.get('id');
    // }

    get name() {
        return this.updateForm.get('name');
    }

    get text() {
        return this.updateForm.get('text');
    }

    get movieUrl() {
        return this.updateForm.get('movieUrl');
    }

    get principal() {
        return this.updateForm.get('principal');
    }

    onUpdateContent() {
        this.contentService.updateContentById(
            this.id,
            this.updateForm.value.name,
            this.updateForm.value.text,
            this.updateForm.value.movieUrl,
            this.updateForm.value.principal,
        ).subscribe(() => {
            this.isUpdated = true;
        })
    }

    onClose() {
        if (this.isUpdated) {
            window.location.reload();
        }
    }
}
