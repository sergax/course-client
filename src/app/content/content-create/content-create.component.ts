import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UserService} from "../../user/user.service";
import {ContentService} from "../content.service";
import {Content} from "../../model/content.model";
import {User} from "../../model/user.model";
import {CourseService} from "../../course/course.service";
import {Course} from "../../model/course.model";
import {Router} from "@angular/router";


@Component({
    selector: 'app-content-create',
    templateUrl: './content-create.component.html',
    styleUrls: ['./content-create.component.css']
})
export class ContentCreateComponent implements OnInit {
    isCreated: boolean = false;
    createForm!: FormGroup;
    course!: Course;
    user!: User;
    href!: string;
    courseId!: number;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
                private userService: UserService,
                private courseService: CourseService,
                private contentService: ContentService,
                private router: Router) {
        this.href = this.router.url;
        this.courseId = +this.href.split('/')[2];

        this.courseService.getCourseById(this.courseId).subscribe(
            course => {
                this.course = course;
            }
        );

        this.userService.getUser().subscribe(
            user => {
                this.user = user;
            }
        );
    }

    ngOnInit(): void {
        this.createForm = new FormGroup({
            'courseId': new FormControl(this.courseId),
            'name': new FormControl(this.data.name),
            'text': new FormControl(this.data.description),
            'movieUrl': new FormControl(this.data.movieUrl),
            'principal': new FormControl(this.data.principal),
        });

    }

    get name() {
        return this.createForm.get('name');
    }

    get text() {
        return this.createForm.get('text');
    }

    get movieUrl() {
        return this.createForm.get('movieUrl');
    }

    get principal() {
        return this.createForm.get('principal');
    }

    onCreate() {
        this.contentService.createContent(
            this.courseId,
            this.createForm.value.name,
            this.createForm.value.text,
            this.createForm.value.movieUrl,
            this.createForm.value.principal,
        ).subscribe(() => {
            this.isCreated = true;
        })
    }

    onClose() {
        if (this.isCreated) {
            window.location.reload();
        }
    }

}
