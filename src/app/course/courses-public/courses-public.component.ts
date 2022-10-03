import {Component, OnInit} from '@angular/core';
import {Course} from "../../model/course.model";
import {CourseService} from "../course.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-courses-public',
    templateUrl: './courses-public.component.html',
    styleUrls: ['./courses-public.component.css']
})
export class CoursesPublicComponent implements OnInit {
    publicCourses!: Array<Course>;

    constructor(private sanitizer: DomSanitizer,
                private courseService: CourseService) {
    }

    ngOnInit(): void {
        this.courseService.getPublicCourses().subscribe(
            publicCourses => {
                this.publicCourses = publicCourses;
            }
        )
    }

    getEmbedUrl(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
